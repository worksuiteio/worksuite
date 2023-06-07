import { ICommand } from '@nestjs/cqrs';
import { ITenantSetting } from '@worksuite/contracts';

export class TenantSettingSaveCommand implements ICommand {
	static readonly type = '[Tenant] Setting Save';

	constructor(
		public readonly input: ITenantSetting,
		public readonly tenantId?: string
	) {}
}
