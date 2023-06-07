import { ICommand } from '@nestjs/cqrs';
import { IEmailResetCreateInput } from '@worksuite/contracts';

export class EmailResetCreateCommand implements ICommand {
	static readonly type = '[Email Reset] Create';

	constructor(
		public readonly input: IEmailResetCreateInput
	) { }
}
