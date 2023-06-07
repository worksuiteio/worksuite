import { ICustomizeEmailTemplateFindInput, LanguagesEnum } from '@worksuite/contracts';
import { IQuery } from '@nestjs/cqrs';

export class FindEmailTemplateQuery implements IQuery {
	static readonly type = '[EmailTemplate] Find';

	constructor(
		public readonly input: ICustomizeEmailTemplateFindInput,
		public readonly themeLanguage: LanguagesEnum
	) {}
}
