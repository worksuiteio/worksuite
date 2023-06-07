import { ITaskStatusFindInput } from '@worksuite/contracts';
import { IntersectionType, PartialType, PickType } from '@nestjs/swagger';
import { TenantOrganizationBaseDTO } from './../../../core/dto';
import { TaskStatus } from './../status.entity';

export class StatusQuerDTO extends IntersectionType(
	PartialType(TenantOrganizationBaseDTO),
	PickType(TaskStatus, ['projectId', 'organizationTeamId'])
) implements ITaskStatusFindInput { }
