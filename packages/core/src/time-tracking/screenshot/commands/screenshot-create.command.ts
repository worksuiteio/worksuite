import { ICommand } from '@nestjs/cqrs';
import { ICreateScreenshotInput } from '@worksuite/contracts';

export class ScreenshotCreateCommand implements ICommand {
	static readonly type = '[Screenshot] Create Screenshot';

	constructor(public readonly input: ICreateScreenshotInput) {}
}
