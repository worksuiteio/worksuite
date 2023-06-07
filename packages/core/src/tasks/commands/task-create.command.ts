import { ICommand } from '@nestjs/cqrs';
import { ITaskCreateInput } from '@worksuite/contracts';

export class TaskCreateCommand implements ICommand {
	static readonly type = '[Tasks] Create Task';

	constructor(
		public readonly input: ITaskCreateInput
	) {}
}
