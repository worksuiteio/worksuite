import { Body, Controller, HttpStatus, Param, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IOrganizationCreateInput, ITenantCreateInput, IUserRegistrationInput, PermissionsEnum } from '@worksuite/contracts';
import { CloudMigrateInterceptor } from './../core/interceptors';
import { PermissionGuard, TenantPermissionGuard } from './../shared/guards';
import { Permissions } from './../shared/decorators';
import {
	WorksuiteCloudOrganizationMigrateCommand,
	WorksuiteCloudTenantMigrateCommand,
	WorksuiteCloudUserMigrateCommand
} from './commands';

@UseInterceptors(CloudMigrateInterceptor)
@UseGuards(TenantPermissionGuard, PermissionGuard)
@Permissions(PermissionsEnum.MIGRATE_GAUZY_CLOUD)
@Controller()
export class WorksuiteCloudController {

	constructor(
		private readonly commandBus: CommandBus
	) {}

	@ApiOperation({ summary: 'Migrate self hosted to gauzy cloud hosted' })
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: 'The user has been successfully created in the Worksuite cloud.'
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description:
			'Invalid input, The response body may contain clues as to what went wrong'
	})
	@Post()
	async migrateUserToWorksuiteCloud(
		@Body() body: IUserRegistrationInput
	) {
		return await this.commandBus.execute(
			new WorksuiteCloudUserMigrateCommand(body)
		);
	}

	@ApiOperation({ summary: 'Migrate self hosted tenant into the gauzy cloud tenant' })
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: 'The tenant has been successfully created in the Worksuite cloud.'
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description:
			'Invalid input, The response body may contain clues as to what went wrong'
	})
	@Post('tenant/:token')
	async migrateTenantToWorksuiteCloud(
		@Body() body: ITenantCreateInput,
		@Param('token') token: string
	) {
		return await this.commandBus.execute(
			new WorksuiteCloudTenantMigrateCommand(body, token)
		);
	}

	@ApiOperation({ summary: 'Migrate self hosted organization into the gauzy cloud organization' })
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: 'The organization has been successfully created in the Worksuite cloud.'
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description:
			'Invalid input, The response body may contain clues as to what went wrong'
	})
	@Post('organization/:token')
	async migrateOrganizationToWorksuiteCloud(
		@Body() body: IOrganizationCreateInput,
		@Param('token') token: string
	) {
		return await this.commandBus.execute(
			new WorksuiteCloudOrganizationMigrateCommand(body, token)
		);
	}
}
