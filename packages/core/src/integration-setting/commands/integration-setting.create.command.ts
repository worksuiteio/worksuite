import { ICommand } from '@nestjs/cqrs';
import { IIntegrationSetting } from '@worksuite/contracts';

export class IntegrationSettingCreateCommand implements ICommand {
	static readonly type = '[Integration Setting] Create Integration Setting';

	constructor(public readonly input: IIntegrationSetting) {}
}
