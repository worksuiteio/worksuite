import { ICommand } from '@nestjs/cqrs';
import { IIntegrationMapSyncTask } from '@worksuite/contracts';

export class IntegrationMapSyncTaskCommand implements ICommand {
	static readonly type = '[Integration Map] Sync Task';

	constructor(
		public readonly input: IIntegrationMapSyncTask
	) {}
}
