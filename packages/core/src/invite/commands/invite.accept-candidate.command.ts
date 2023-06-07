import { IInviteAcceptInput, LanguagesEnum } from '@worksuite/contracts';
import { ICommand } from '@nestjs/cqrs';

export class InviteAcceptCandidateCommand implements ICommand {
	static readonly type = '[Invite] Accept Candidate';

	constructor(
		public readonly input: IInviteAcceptInput,
		public readonly languageCode: LanguagesEnum
	) {}
}
