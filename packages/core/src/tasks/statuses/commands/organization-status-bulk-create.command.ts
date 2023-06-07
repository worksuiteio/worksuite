import { ICommand } from '@nestjs/cqrs';
import { IOrganization } from '@worksuite/contracts';

export class OrganizationStatusBulkCreateCommand implements ICommand {
	static readonly type = '[Organization Status] Bulk Create';

	constructor(
		public readonly input: IOrganization
	) {}
}
