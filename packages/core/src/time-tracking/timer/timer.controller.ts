import {
	Controller,
	UseGuards,
	HttpStatus,
	Post,
	Body,
	Get,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
	ITimeLog,
	ITimerStatus,
	ITimerStatusInput,
	PermissionsEnum
} from '@gauzy/contracts';
import { TimerService } from './timer.service';
import { PermissionGuard, TenantPermissionGuard } from './../../shared/guards';
import { Permissions } from './../../shared/decorators';
import { StartTimerDTO, StopTimerDTO } from './dto';

@ApiTags('Timer Tracker')
@UseGuards(TenantPermissionGuard, PermissionGuard)
@Permissions(PermissionsEnum.TIME_TRACKER)
@Controller()
export class TimerController {

	constructor(
		private readonly timerService: TimerService
	) {}

	@ApiOperation({ summary: 'Toggle timer' })
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'The timer has been successfully On/Off.'
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description:
			'Invalid input, The response body may contain clues as to what went wrong'
	})
	@Get('/status')
	async getTimerStatus(
		@Query() query: ITimerStatusInput
	): Promise<ITimerStatus> {
		return await this.timerService.getTimerStatus(query);
	}

	@ApiOperation({ summary: 'Toggle timer' })
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'The timer has been successfully On/Off.'
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description:
			'Invalid input, The response body may contain clues as to what went wrong'
	})
	@Post('/toggle')
	async toggleTimer(
		@Body(new ValidationPipe()) entity: StartTimerDTO
	): Promise<ITimeLog | null> {
		return await this.timerService.toggleTimeLog(entity);
	}

	@ApiOperation({ summary: 'Start timer' })
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'The timer has been successfully On.'
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input, The response body may contain clues as to what went wrong'
	})
	@Post('/start')
	async startTimer(
		@Body(new ValidationPipe()) entity: StartTimerDTO
	): Promise<ITimeLog> {
		return await this.timerService.startTimer(entity);
	}

	@ApiOperation({ summary: 'Stop timer' })
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'The timer has been successfully Off.'
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description:
			'Invalid input, The response body may contain clues as to what went wrong'
	})
	@Post('/stop')
	@UsePipes(new ValidationPipe({ transform: true }))
	async stopTimer(
		@Body(new ValidationPipe()) entity: StopTimerDTO
	): Promise<ITimeLog | null> {
		return await this.timerService.stopTimer(entity);
	}
}
