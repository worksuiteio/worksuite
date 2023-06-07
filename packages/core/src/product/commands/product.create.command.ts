import { ICommand } from '@nestjs/cqrs';
import { IProductCreateInput } from '@worksuite/contracts';

export class ProductCreateCommand implements ICommand {
	static readonly type = '[Product] Register';

	constructor(public readonly productInput: IProductCreateInput) {}
}
