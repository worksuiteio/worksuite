import { ICommand } from '@nestjs/cqrs';
import { ICandidateUpdateInput } from '@worksuite/contracts';

export class CandidateUpdateCommand implements ICommand {
	static readonly type = '[Candidate] Update';

	constructor(
		public readonly input: ICandidateUpdateInput
	) {}
}
