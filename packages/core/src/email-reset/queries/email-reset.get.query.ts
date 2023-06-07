import { IEmailResetFindInput } from '@worksuite/contracts';
import { IQuery } from '@nestjs/cqrs';

export class EmailResetGetQuery implements IQuery {
	static readonly type = '[Email Reset] Get';

	constructor(
		public readonly input: IEmailResetFindInput
	) {}
}
