import { environment } from '@worksuite/config';

export const DEFAULT_ORGANIZATION_TEAMS = [
	{
		name: 'Employees',
		defaultMembers: [
			`${environment.demoCredentialConfig.superAdminEmail}`,
			'ruslan@worksuite.co',
			'alish@worksuite.co',
			'julia@worksuite.co'
		],
		manager: ['ruslan@worksuite.co']
	},
	{
		name: 'Contractors',
		defaultMembers: [			
			'ckhandla94@gmail.com'
		],
		manager: ['ruslan@worksuite.co']
	},
	{
		name: 'Designers',
		defaultMembers: ['julia@worksuite.co'],
		manager: []
	},
	{
		name: 'QA',
		defaultMembers: ['julia@worksuite.co'],
		manager: []
	}
];
