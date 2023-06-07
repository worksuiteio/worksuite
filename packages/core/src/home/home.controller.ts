import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import * as moment from 'moment';
import { Public } from '@worksuite/common';

@Controller()
export class HomeController {

	@HttpCode(HttpStatus.OK)
	@Get('/')
	@Public()
	async home() {
		return new Object({
			status: HttpStatus.OK,
			message: `Worksuite API`
		});
	}

	@HttpCode(HttpStatus.OK)
	@Get('/moment')
	@Public()
	async getMoment() {
		return new Object({
			status: HttpStatus.OK,
			data: {
				timezone: `TIMEZONE (${moment.tz.guess()})`,
				date: `${moment()}`
			}
		});
	}
}
