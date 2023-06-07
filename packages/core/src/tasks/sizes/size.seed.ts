import { DataSource } from 'typeorm';
import { getConfig } from '@worksuite/config';
import { ITaskSize } from '@worksuite/contracts';
import { cleanWorksuiteIcons, copyWorksuiteIcons } from './../../core/seeds/utils';
import { DEFAULT_GLOBAL_SIZES } from './default-global-sizes';
import { TaskSize } from './size.entity';

const config = getConfig();

/**
 * Default global system sizes
 *
 * @param dataSource
 * @returns
 */
export const createDefaultSizes = async (
	dataSource: DataSource
): Promise<ITaskSize[]> => {
	await cleanWorksuiteIcons(config, 'ever-icons/task-sizes');

	let sizes: ITaskSize[] = [];
	for await (const size of DEFAULT_GLOBAL_SIZES) {
		sizes.push(new TaskSize({
			...size,
			icon: copyWorksuiteIcons(size.icon, config)
		}));
	}
	return await dataSource.manager.save(sizes);
};
