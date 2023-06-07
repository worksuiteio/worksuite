import { ICommand } from '@nestjs/cqrs';
import { IOrganizationProjectsUpdateInput } from '@worksuite/contracts';

export class OrganizationProjectUpdateCommand implements ICommand {
	static readonly type = '[Organization Project] Update';

	constructor(
		public readonly input: IOrganizationProjectsUpdateInput
	) {}
}
