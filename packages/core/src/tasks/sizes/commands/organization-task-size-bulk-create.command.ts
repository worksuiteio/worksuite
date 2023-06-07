import { ICommand } from '@nestjs/cqrs';
import { IOrganization } from '@worksuite/contracts';

export class OrganizationTaskSizeBulkCreateCommand implements ICommand {
	static readonly type = '[Organization] Task Size Bulk Create';

	constructor(
		public readonly input: IOrganization
	) { }
}
