import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { catchError, tap } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { ITenant } from '@worksuite/contracts';
import { WorksuiteCloudService } from '../../gauzy-cloud.service';
import { RoleService } from './../../../role/role.service';
import { WorksuiteCloudTenantMigrateCommand } from './../gauzy-cloud-tenant.migrate.command';
import { RolePermissionService } from './../../../role-permission/role-permission.service';

@CommandHandler(WorksuiteCloudTenantMigrateCommand)
export class WorksuiteCloudTenantMigrateHandler implements ICommandHandler<WorksuiteCloudTenantMigrateCommand> {

	constructor(
		private readonly _gauzyCloudService: WorksuiteCloudService,
		private readonly _roleService: RoleService,
		private readonly _rolePermissionService: RolePermissionService
	) {}

	public async execute(command: WorksuiteCloudTenantMigrateCommand): Promise<any> {
		const { input, token } = command;
		return this._gauzyCloudService.migrateTenant(input, token).pipe(
			tap(async (response: any) => {
				if (response && response.data) {
					const tenant = response.data;

					this.migrateRoles(tenant, token);
					this.migratePermissions(tenant, token);
				}
			}),
			catchError((error) => {
				console.log('Bad Promise:', error);
				return observableOf(error)
			})
		);
	}

	private async migrateRoles(
		tenant: ITenant, 
		token: string
	) {
		return this._gauzyCloudService.migrateRoles(
			await this._roleService.migrateRoles(), 
			token, 
			tenant
		)
		.subscribe();
	}

	private async migratePermissions(
		tenant: ITenant, 
		token: string
	) {
		return this._gauzyCloudService.migrateRolePermissions(
			await this._rolePermissionService.migratePermissions(), 
			token, 
			tenant
		)
		.subscribe();
	}
}
