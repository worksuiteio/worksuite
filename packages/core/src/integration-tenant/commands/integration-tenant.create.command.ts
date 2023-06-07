import { ICommand } from '@nestjs/cqrs';
import { IIntegrationTenantCreateDto } from '@worksuite/contracts';

export class IntegrationTenantCreateCommand implements ICommand {
	static readonly type = '[Integration] Create Integration';

	constructor(public readonly input: IIntegrationTenantCreateDto) {}
}
