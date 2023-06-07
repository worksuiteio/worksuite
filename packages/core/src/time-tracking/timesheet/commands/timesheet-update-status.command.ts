import { ICommand } from '@nestjs/cqrs';
import { IUpdateTimesheetStatusInput } from '@worksuite/contracts';

export class TimesheetUpdateStatusCommand implements ICommand {
	static readonly type = '[Timesheet] Update Status';

	constructor(public readonly input: IUpdateTimesheetStatusInput) {}
}
