import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { WorksuiteCloudService } from '../../gauzy-cloud.service';
import { WorksuiteCloudOrganizationMigrateCommand } from './../gauzy-cloud-organization.migrate.command';

@CommandHandler(WorksuiteCloudOrganizationMigrateCommand)
export class WorksuiteCloudOrganizationMigrateHandler implements ICommandHandler<WorksuiteCloudOrganizationMigrateCommand> {

	constructor(
		private readonly gauzyCloudService: WorksuiteCloudService
	) {}

	public async execute(command: WorksuiteCloudOrganizationMigrateCommand): Promise<any> {
		const { input, token } = command;
		return this.gauzyCloudService.migrateOrganization(input, token);
	}
}
