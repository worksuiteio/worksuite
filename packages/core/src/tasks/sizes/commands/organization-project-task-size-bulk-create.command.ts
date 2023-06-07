import { ICommand } from '@nestjs/cqrs';
import { IOrganizationProject } from '@worksuite/contracts';

export class OrganizationProjectTaskSizeBulkCreateCommand implements ICommand {
	static readonly type = '[Organization Project] Task Size Bulk Create';

	constructor(
		public readonly input: IOrganizationProject
	) { }
}
