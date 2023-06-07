import { ComponentLayoutStyleEnum, LanguagesEnum } from '@worksuite/contracts';

export const DEFAULT_CANDIDATES = [
	{
		email: 'john@worksuite.co',
		password: '123456',
		firstName: 'John',
		lastName: 'Smith',
		imageUrl: 'assets/images/avatars/alish.jpg',
		candidateLevel: 'D',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'jaye@worksuite.co',
		password: '123456',
		firstName: 'Jaye',
		lastName: 'Jeffreys',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		candidateLevel: 'B',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'kasey@worksuite.co',
		password: '123456',
		firstName: 'Kasey',
		lastName: 'Kraker',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		candidateLevel: null,
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'norris@worksuite.co',
		password: '123456',
		firstName: 'Norris ',
		lastName: 'Nesbit',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		candidateLevel: 'A',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'estella@worksuite.co',
		password: '123456',
		firstName: 'Estella',
		lastName: 'Ennis',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		candidateLevel: null,
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'greg@worksuite.co',
		password: '123456',
		firstName: 'Greg ',
		lastName: 'Grise',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		candidateLevel: 'A',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	}
];
