import { ICommand } from '@nestjs/cqrs';
import { IUserEmailInput } from '@worksuite/contracts';
import { IAppIntegrationConfig } from '@worksuite/common';

export class SendAuthCodeCommand implements ICommand {

	static readonly type = '[Password Less] Send Auth Code';

	constructor(
		public readonly input: IUserEmailInput & Partial<IAppIntegrationConfig>,
	) { }
}
