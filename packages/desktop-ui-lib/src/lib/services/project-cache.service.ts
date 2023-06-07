import { Injectable } from '@angular/core';
import { AbstractCacheService } from './abstract-cache.service';
import { IOrganizationProject } from '@worksuite/contracts';
import { StorageService } from './storage.service';
import { Store } from '../services';

@Injectable({
	providedIn: 'root',
})
export class ProjectCacheService extends AbstractCacheService<
	IOrganizationProject[]
> {
	constructor(
		protected _storageService: StorageService<IOrganizationProject[]>,
		protected _store: Store
	) {
		super(_storageService, _store);
		this.prefix = ProjectCacheService.name.toString();
	}
}
