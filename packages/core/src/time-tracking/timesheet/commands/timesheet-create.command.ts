import { ICommand } from '@nestjs/cqrs';
import { ITimesheetCreateInput } from '@worksuite/contracts';

export class TimesheetCreateCommand implements ICommand {
	static readonly type = '[Timesheet] Create Timesheet';

	constructor(public readonly input: ITimesheetCreateInput) {}
}
