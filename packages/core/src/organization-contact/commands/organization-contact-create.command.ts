import { ICommand } from '@nestjs/cqrs';
import { IOrganizationContactCreateInput } from '@worksuite/contracts';

export class OrganizationContactCreateCommand implements ICommand {
	static readonly type = '[Organization Contact] Create';

	constructor(
		public readonly input: IOrganizationContactCreateInput
	) {}
}