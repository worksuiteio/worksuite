import { seedJob } from '@worksuite/core';
import { pluginConfig } from './plugin-config';

seedJob(pluginConfig).catch((error: any) => {
	console.log(error);
	process.exit(1);
});
