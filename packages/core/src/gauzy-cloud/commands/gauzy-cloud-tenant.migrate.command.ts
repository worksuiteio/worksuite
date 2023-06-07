import { ICommand } from '@nestjs/cqrs';
import { ITenantCreateInput } from '@worksuite/contracts';

export class WorksuiteCloudTenantMigrateCommand implements ICommand {
	static readonly type = '[Worksuite Cloud] Tenant Migrate';

	constructor(
		public readonly input: ITenantCreateInput,
		public readonly token: string
	) {}
}
