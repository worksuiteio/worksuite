import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { WorksuiteAIService } from './gauzy-ai.service';
import gauzyAI from './config/gauzy-ai';

@Module({
	imports: [
		HttpModule.registerAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				baseURL: configService.get<string>('guazyAI.gauzyAIEndpoint'),
				timeout: configService.get<number>('guazyAI.gauzyAIRequestTimeout'),
				maxRedirects: 5,
				headers: {
					'Content-Type': 'application/json',
				},
			}),
			inject: [ConfigService],
		}),
		ConfigModule.forFeature(gauzyAI),
	],
	controllers: [],
	providers: [WorksuiteAIService, ConfigService],
	exports: [WorksuiteAIService],
})
export class WorksuiteAIModule { }
