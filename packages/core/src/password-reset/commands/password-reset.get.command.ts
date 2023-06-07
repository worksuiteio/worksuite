import { IPasswordResetFindInput } from '@worksuite/contracts';
import { ICommand } from '@nestjs/cqrs';

export class PasswordResetGetCommand implements ICommand {
	static readonly type = '[Password Reset] Get';

	constructor(
		public readonly input: IPasswordResetFindInput
	) {}
}
