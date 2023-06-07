import { ICommand } from '@nestjs/cqrs';
import { ITimeSlot } from '@worksuite/contracts';

export class TimeSlotBulkCreateOrUpdateCommand implements ICommand {
	static readonly type = '[TimeSlot] bulk create / update';

	constructor(
		public readonly slots: ITimeSlot[],
		public readonly employeeId: ITimeSlot['employeeId'],
		public readonly organizationId: ITimeSlot['organizationId'],
	) {}
}
