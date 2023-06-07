import { IApprovalPolicy, IApprovalPolicyUpdateInput } from '@worksuite/contracts';
import { ICommand } from '@nestjs/cqrs';

export class ApprovalPolicyUpdateCommand implements ICommand {
	static readonly type = '[ApprovalPolicy] Update';

	constructor(
		public readonly id: IApprovalPolicy['id'],
		public readonly input: IApprovalPolicyUpdateInput
	) {}
}