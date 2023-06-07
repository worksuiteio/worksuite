import { IInvoiceUpdateInput } from '@worksuite/contracts';
import { ICommand } from '@nestjs/cqrs';

export class InvoiceUpdateCommand implements ICommand {
	static readonly type = '[Invoice] Update';

	constructor(public readonly input: IInvoiceUpdateInput) {}
}
