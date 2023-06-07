import { IListQueryInput, IRequestApprovalFindInput } from '@worksuite/contracts';
import { ICommand } from '@nestjs/cqrs';

export class RequestApprovalPolicyGetCommand implements ICommand {
	static readonly type = '[RequestApprovalPolicy] Get';

	constructor(
		public readonly input: IListQueryInput<IRequestApprovalFindInput>
	) {}
}
