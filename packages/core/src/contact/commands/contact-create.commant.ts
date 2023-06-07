import { ICommand } from '@nestjs/cqrs';
import { IContactCreateInput } from '@worksuite/contracts';

export class ContactCreateCommand implements ICommand {
	static readonly type = '[Contact] Create Contact';

	constructor(public readonly input: IContactCreateInput) {}
}
