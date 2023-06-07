import { ICommand } from '@nestjs/cqrs';
import { IOrganizationTeam } from '@worksuite/contracts';

export class OrganizationTeamTaskSizeBulkCreateCommand implements ICommand {
	static readonly type = '[Organization Team] Task Size Bulk Create';

	constructor(
		public readonly input: IOrganizationTeam
	) { }
}
