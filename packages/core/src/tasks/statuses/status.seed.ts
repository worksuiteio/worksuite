import { DataSource } from 'typeorm';
import { getConfig } from '@worksuite/config';
import { ITaskStatus } from '@worksuite/contracts';
import { cleanWorksuiteIcons, copyWorksuiteIcons } from './../../core/seeds/utils';
import { DEFAULT_GLOBAL_STATUSES } from './default-global-statuses';
import { TaskStatus } from './status.entity';

const config = getConfig();

/**
 * Default global system status
 *
 * @param dataSource
 * @returns
 */
export const createDefaultStatuses = async (
	dataSource: DataSource
): Promise<ITaskStatus[]> => {
	await cleanWorksuiteIcons(config, 'ever-icons/task-statuses');

	let statuses: ITaskStatus[] = [];
	for await (const status of DEFAULT_GLOBAL_STATUSES) {
		statuses.push(new TaskStatus({
			...status,
			icon: copyWorksuiteIcons(status.icon, config)
		}));
	}
	return await dataSource.manager.save(statuses);
};
