import { IIntegrationMapSyncTimeLog } from '@worksuite/contracts';
import { ICommand } from '@nestjs/cqrs';

export class IntegrationMapSyncTimeLogCommand implements ICommand {
	static readonly type = '[Integration Map] Sync TimeLog';

	constructor(
		public readonly input: IIntegrationMapSyncTimeLog
	) {}
}
