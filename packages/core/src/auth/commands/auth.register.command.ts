import { ICommand } from '@nestjs/cqrs';
import { IUserRegistrationInput, LanguagesEnum } from '@worksuite/contracts';
import { IAppIntegrationConfig } from '@worksuite/common';

export class AuthRegisterCommand implements ICommand {
	static readonly type = '[Auth] Register';

	constructor(
		public readonly input: IUserRegistrationInput & Partial<IAppIntegrationConfig>,
		public readonly languageCode: LanguagesEnum
	) {}
}
