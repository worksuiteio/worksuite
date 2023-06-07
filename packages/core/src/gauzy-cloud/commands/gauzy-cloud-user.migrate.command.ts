import { ICommand } from '@nestjs/cqrs';
import { IUserRegistrationInput } from '@worksuite/contracts';

export class WorksuiteCloudUserMigrateCommand implements ICommand {
	static readonly type = '[Worksuite Cloud] User Migrate';

	constructor(public readonly input: IUserRegistrationInput) {}
}