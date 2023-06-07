import { ICommand } from '@nestjs/cqrs';
import { IOrganizationProject } from '@worksuite/contracts';

export class OrganizationProjectTaskPriorityBulkCreateCommand implements ICommand {
	static readonly type = '[Organization Project] Task Priority Bulk Create';

	constructor(
		public readonly input: IOrganizationProject
	) { }
}
