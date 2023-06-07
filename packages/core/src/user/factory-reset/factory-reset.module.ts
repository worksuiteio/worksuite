// Modified code from https://github.com/xmlking/ngx-starter-kit.
// MIT License, see https://github.com/xmlking/ngx-starter-kit/blob/develop/LICENSE
// Copyright (c) 2018 Sumanth Chinthagunta

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getEntitiesFromPlugins } from '@worksuite/plugin';
import { getConfig } from '@worksuite/config';
import { FactoryResetService } from './factory-reset.service';
import { coreEntities } from '../../core/entities';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			...coreEntities,
			...getEntitiesFromPlugins(getConfig().plugins)
		]),
	],
	providers: [
		FactoryResetService,
	],
	exports: [FactoryResetService]
})
export class FactoryResetModule { }
