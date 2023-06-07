import { ICommand } from '@nestjs/cqrs';
import { IDeleteTimeSlot } from '@worksuite/contracts';

export class DeleteTimeSlotCommand implements ICommand {
	static readonly type = '[TimeSlot] delete';

	constructor(
		public readonly query: IDeleteTimeSlot
	) {}
}
