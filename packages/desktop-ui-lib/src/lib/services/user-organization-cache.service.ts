import { Injectable } from '@angular/core';
import { AbstractCacheService } from './abstract-cache.service';
import { IUserOrganization } from '@worksuite/contracts';
import { StorageService } from './storage.service';
import { Store } from '../services';

@Injectable({
	providedIn: 'root',
})
export class UserOrganizationCacheService extends AbstractCacheService<IUserOrganization> {
	constructor(
		protected _storageService: StorageService<IUserOrganization>,
		protected _store: Store
	) {
		super(_storageService, _store);
		this.prefix = UserOrganizationCacheService.name.toString();
		this.duration = 24 * 3600 * 1000; // 24 Hours
	}
}
