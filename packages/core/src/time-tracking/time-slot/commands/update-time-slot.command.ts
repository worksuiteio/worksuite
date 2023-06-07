import { ICommand } from '@nestjs/cqrs';
import { ITimeSlot } from '@worksuite/contracts';

export class UpdateTimeSlotCommand implements ICommand {
	static readonly type = '[TimeSlot] update';

	constructor(
		public readonly id: string,
		public readonly input: ITimeSlot
	) {}
}
