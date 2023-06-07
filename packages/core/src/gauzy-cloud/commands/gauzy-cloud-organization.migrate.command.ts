import { ICommand } from '@nestjs/cqrs';
import { IOrganizationCreateInput } from '@worksuite/contracts';

export class WorksuiteCloudOrganizationMigrateCommand implements ICommand {
	static readonly type = '[Worksuite Cloud] Organization Migrate';

	constructor(
		public readonly input: IOrganizationCreateInput,
		public readonly token: string
	) {}
}
