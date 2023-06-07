import { CurrenciesEnum, DefaultValueDateTypeEnum } from '@worksuite/contracts';

export const DEFAULT_EVER_ORGANIZATIONS = [
	{
		name: 'Worksuite Technologies LTD',
		currency: CurrenciesEnum.BGN,
		defaultValueDateType: DefaultValueDateTypeEnum.TODAY,
		imageUrl: 'assets/images/logos/ever-large.jpg',
		isDefault: true
	},
	{
		name: 'Worksuite Co. Ltd',
		currency: CurrenciesEnum.ILS,
		defaultValueDateType: DefaultValueDateTypeEnum.TODAY,
		imageUrl: 'assets/images/logos/ever-large.jpg',
		isDefault: false
	}
];

export const DEFAULT_ORGANIZATIONS = [
	{
		name: 'Default Company',
		currency: CurrenciesEnum.USD,
		defaultValueDateType: DefaultValueDateTypeEnum.TODAY,
		imageUrl: 'assets/images/logos/logo_Worksuite.svg',
		isDefault: true
	}
];
