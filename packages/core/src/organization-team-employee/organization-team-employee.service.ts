import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import {
	IEmployee,
	IOrganizationTeam,
	IOrganizationTeamEmployee,
	IOrganizationTeamEmployeeFindInput,
	IOrganizationTeamEmployeeUpdateInput,
	PermissionsEnum,
	RolesEnum,
} from '@worksuite/contracts';
import { isNotEmpty } from '@worksuite/common';
import { TenantAwareCrudService } from './../core/crud';
import { RequestContext } from './../core/context';
import { Role } from './../core/entities/internal';
import { OrganizationTeamEmployee } from './organization-team-employee.entity';
import { TaskService } from './../tasks/task.service';

@Injectable()
export class OrganizationTeamEmployeeService extends TenantAwareCrudService<OrganizationTeamEmployee> {
	constructor(
		@InjectRepository(OrganizationTeamEmployee)
		protected readonly organizationTeamEmployeeRepository: Repository<OrganizationTeamEmployee>,
		private readonly taskService: TaskService
	) {
		super(organizationTeamEmployeeRepository);
	}

	async updateOrganizationTeam(
		organizationTeamId: IOrganizationTeam['id'],
		organizationId: IOrganizationTeam['organizationId'],
		employees: IEmployee[],
		role: Role,
		managerIds: string[],
		memberIds: string[]
	) {
		const members = [...managerIds, ...memberIds];
		const tenantId = RequestContext.currentTenantId();

		const teamMembers = await this.repository.find({
			where: {
				tenantId,
				organizationId,
				organizationTeamId,
			},
			relations: {
				role: true,
			},
		});

		// 1. Remove employee members from the organization team
		const removedMemberIds =
			teamMembers
				.filter((employee) => !members.includes(employee.employeeId))
				.map((emp) => emp.id) || [];
		if (isNotEmpty(removedMemberIds)) {
			this.deleteMemberByIds(removedMemberIds);
		}

		// 2. Update role of employees that already exist in the system
		teamMembers
			.filter((employee) => members.includes(employee.employeeId))
			.forEach(async (member: IOrganizationTeamEmployee) => {
				const { id, employeeId } = member;
				await this.repository.update(id, {
					role: managerIds.includes(employeeId) ? role : null,
				});
			});

		// 3. Add new team members
		const existingMembers = teamMembers.map(
			(member: IOrganizationTeamEmployee) => member.employeeId
		);
		employees
			.filter((member: IEmployee) => !existingMembers.includes(member.id))
			.forEach(async (employee: IEmployee) => {
				const organizationTeamEmployee = new OrganizationTeamEmployee();
				organizationTeamEmployee.organizationTeamId =
					organizationTeamId;
				organizationTeamEmployee.employeeId = employee.id;
				organizationTeamEmployee.tenantId = tenantId;
				organizationTeamEmployee.organizationId = organizationId;
				organizationTeamEmployee.role = managerIds.includes(employee.id)
					? role
					: null;

				this.save(organizationTeamEmployee);
			});
	}

	/**
	 * Delete team members by IDs
	 *
	 * @param memberIds
	 */
	deleteMemberByIds(memberIds: string[]) {
		memberIds.forEach(async (memberId) => {
			await this.repository.delete(memberId);
		});
	}

	/**
	 * Update organization team member entity
	 *
	 * @param id
	 * @param entity
	 * @returns
	 */
	public async update(
		memberId: IOrganizationTeamEmployee['id'],
		entity: IOrganizationTeamEmployeeUpdateInput
	): Promise<OrganizationTeamEmployee | UpdateResult> {
		try {
			const { organizationId, organizationTeamId } = entity;
			if (
				!RequestContext.hasPermission(
					PermissionsEnum.CHANGE_SELECTED_EMPLOYEE
				)
			) {
				try {
					await this.findOneByWhereOptions({
						employeeId: RequestContext.currentEmployeeId(),
						organizationId,
						organizationTeamId,
						role: {
							name: RolesEnum.MANAGER,
						},
					});
					return await super.update(
						{ id: memberId, organizationId, organizationTeamId },
						entity
					);
				} catch (error) {
					throw new ForbiddenException();
				}
			}
			return await super.update(
				{ id: memberId, organizationId, organizationTeamId },
				entity
			);
		} catch (error) {
			throw new ForbiddenException();
		}
	}

	/**
	 * Delete team member by memberId
	 *
	 * @param memberId
	 * @param options
	 * @returns
	 */
	async deleteTeamMember(
		memberId: IOrganizationTeamEmployee['id'],
		options: IOrganizationTeamEmployeeFindInput
	): Promise<DeleteResult | OrganizationTeamEmployee> {
		try {
			const { organizationId, organizationTeamId } = options;
			const tenantId = RequestContext.currentTenantId();

			if (RequestContext.hasPermission(
				PermissionsEnum.CHANGE_SELECTED_EMPLOYEE
			)) {
				const member = await this.repository.findOneOrFail({
					where: {
						id: memberId,
						tenantId,
						organizationId,
						organizationTeamId,
					}
				});
				await this.taskService.unassignEmployeeFromTeamTasks(
					member.employeeId,
					organizationTeamId
				);
				return await this.repository.remove(member);
			} else {
				const employeeId = RequestContext.currentEmployeeId();
				if (employeeId) {
					let member: OrganizationTeamEmployee;
					try {
						/** If employee has manager of the team, he/she should be able to remove members from team */
						await this.findOneByWhereOptions({
							organizationId,
							organizationTeamId,
							role: {
								name: RolesEnum.MANAGER
							},
						});
						member = await this.repository.findOneOrFail({
							where: {
								id: memberId,
								organizationId,
								tenantId,
								organizationTeamId,
							},
						});
					} catch (error) {
						/** If employee has member of the team, he/she should be able to remove own self from team */
						member = await this.repository.findOneOrFail({
							where: {
								employeeId,
								organizationId,
								tenantId,
								organizationTeamId
							},
						});
					}
					/** Unassigned employee all tasks before remove from team  */
					await this.taskService.unassignEmployeeFromTeamTasks(
						member.employeeId,
						organizationTeamId
					);
					return await this.repository.remove(member);
				}
				throw new ForbiddenException();
			}
		} catch (error) {
			throw new ForbiddenException();
		}
	}
}
