import { IQuery } from '@nestjs/cqrs';
import { IEmployeeStatisticsHistoryFindInput } from '@worksuite/contracts';

export class EmployeeStatisticsHistoryQuery implements IQuery {
	static readonly type = '[EmployeeStatistics] History';

	constructor(public readonly input: IEmployeeStatisticsHistoryFindInput) {}
}
