import { IIntegrationMapSyncActivity } from '@worksuite/contracts';
import { ICommand } from '@nestjs/cqrs';

export class IntegrationMapSyncActivityCommand implements ICommand {
	static readonly type = '[Integration Map] Sync Activity';

	constructor(
		public readonly input: IIntegrationMapSyncActivity
	) {}
}
