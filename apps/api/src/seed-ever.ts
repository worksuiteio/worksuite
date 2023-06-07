import { seedWorksuite } from '@worksuite/core';
import { pluginConfig } from './plugin-config';

/*
* Worksuite seeder  
*/
seedWorksuite(pluginConfig).catch((error: any) => {
	console.log(error);
	process.exit(1);
});
