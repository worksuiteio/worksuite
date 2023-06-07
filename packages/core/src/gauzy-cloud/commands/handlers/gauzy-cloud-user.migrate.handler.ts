import { BadRequestException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { switchMap, catchError } from 'rxjs/operators';
import { WorksuiteCloudService } from '../../gauzy-cloud.service';
import { WorksuiteCloudUserMigrateCommand } from './../gauzy-cloud-user.migrate.command';

@CommandHandler(WorksuiteCloudUserMigrateCommand)
export class WorksuiteCloudUserMigrateHandler implements ICommandHandler<WorksuiteCloudUserMigrateCommand> {

	constructor(
		private readonly gauzyCloudService: WorksuiteCloudService
	) {}

	public async execute(command: WorksuiteCloudUserMigrateCommand): Promise<any> {
		const { input } = command;
		return this.gauzyCloudService.migrateUser(input).pipe(
			switchMap((response: any) => {
				if (response && response.data) {
					const { data } = response;
					const { password } = input;
					return this.gauzyCloudService.extractToken({
						email: data.email,
						password
					});
				}
			}),
			catchError((error) => {
				console.log('Bad Promise:', error);
				throw new BadRequestException(error);
			})
		);
	}
}
