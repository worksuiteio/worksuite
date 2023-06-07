import { ICommand } from '@nestjs/cqrs';
import { ISubmitTimesheetInput } from '@worksuite/contracts';

export class TimesheetSubmitCommand implements ICommand {
	static readonly type = '[Timesheet] Submit';

	constructor(
		public readonly input: ISubmitTimesheetInput
	) {}
}
