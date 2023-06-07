import { DataSource } from 'typeorm';
import { getConfig } from '@worksuite/config';
import { ITaskPriority } from '@worksuite/contracts';
import { cleanWorksuiteIcons, copyWorksuiteIcons } from './../../core/seeds/utils';
import { DEFAULT_GLOBAL_PRIORITIES } from './default-global-priorities';
import { TaskPriority } from './priority.entity';

const config = getConfig();

/**
 * Default global system priority
 *
 * @param dataSource
 * @returns
 */
export const createDefaultPriorities = async (
	dataSource: DataSource
): Promise<ITaskPriority[]> => {
	await cleanWorksuiteIcons(config, 'ever-icons/task-priorities');

	let priorities: ITaskPriority[] = [];
	for await (const priority of DEFAULT_GLOBAL_PRIORITIES) {
		priorities.push(new TaskPriority({
			...priority,
			icon: copyWorksuiteIcons(priority.icon, config)
		}));
	}
	return await dataSource.manager.save(priorities);
};
