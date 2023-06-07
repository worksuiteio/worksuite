import { ICommand } from '@nestjs/cqrs';
import { IEmployeeUpdateInput } from '@worksuite/contracts';

export class EmployeeUpdateCommand implements ICommand {
	static readonly type = '[Employee] Update';

	constructor(
		public readonly input: IEmployeeUpdateInput,
	) {}
}
