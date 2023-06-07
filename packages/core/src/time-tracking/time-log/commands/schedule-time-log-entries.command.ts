import { ICommand } from '@nestjs/cqrs';
import { ITimeLog } from '@worksuite/contracts';

export class ScheduleTimeLogEntriesCommand implements ICommand {
	static readonly type = 'Adjust [TimeLog] Entries';

	constructor(
		public readonly timeLog?: ITimeLog
	) {}
}