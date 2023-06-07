import { Injectable } from '@angular/core';
import { AbstractCacheService } from './abstract-cache.service';
import { IOrganizationContact } from '@worksuite/contracts';
import { StorageService } from './storage.service';
import { Store } from '../services';

@Injectable({
	providedIn: 'root',
})
export class ClientCacheService extends AbstractCacheService<
	IOrganizationContact[]
> {
	constructor(
		protected _storageService: StorageService<IOrganizationContact[]>,
		protected _store: Store
	) {
		super(_storageService, _store);
		this.prefix = ClientCacheService.name.toString();
	}
}
