import { IIntegrationMapSyncTimeSlot } from '@worksuite/contracts';
import { ICommand } from '@nestjs/cqrs';

export class IntegrationMapSyncTimeSlotCommand implements ICommand {
	static readonly type = '[Integration Map] Sync TimeSlot';

	constructor(
		public readonly input: IIntegrationMapSyncTimeSlot
	) {}
}
