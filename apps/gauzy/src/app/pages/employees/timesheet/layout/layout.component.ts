import { Component, OnInit, OnDestroy, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { NbRouteTab } from '@nebular/theme';
import { tap } from 'rxjs/operators';
import { PermissionsEnum } from '@worksuite/contracts';
import { TranslationBaseComponent } from './../../../../@shared/language-base';
import { Store } from './../../../../@core/services';

@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'ngx-timesheet-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class TimesheetLayoutComponent extends TranslationBaseComponent
	implements AfterContentChecked, OnInit, OnDestroy {

	public tabs: NbRouteTab[] = [];

	constructor(
		private readonly cdr: ChangeDetectorRef,
		public readonly translateService: TranslateService,
		private readonly store: Store,
	) {
		super(translateService);
	}

	ngOnInit(): void {
		this._loadTabs();
		this._applyTranslationOnTabs();
	}

	ngAfterContentChecked(): void {
		this.cdr.detectChanges();
	}

	private _loadTabs() {
		this.tabs = [
			...(this.store.hasAnyPermission(
				PermissionsEnum.TIME_TRACKER,
				PermissionsEnum.ALL_ORG_EDIT,
				PermissionsEnum.TIME_TRACKING_DASHBOARD
			) ? [
				{
					title: this.getTranslation('TIMESHEET.DAILY'),
					responsive: true,
					route: '/pages/employees/timesheets/daily'
				},
				{
					title: this.getTranslation('TIMESHEET.WEEKLY'),
					responsive: true,
					route: '/pages/employees/timesheets/weekly'
				},
				{
					title: this.getTranslation('TIMESHEET.CALENDAR'),
					responsive: true,
					route: '/pages/employees/timesheets/calendar'
				}
			] : []),
			...(this.store.hasAnyPermission(PermissionsEnum.CAN_APPROVE_TIMESHEET) ?
			[
				{
					title: this.getTranslation('TIMESHEET.APPROVALS'),
					responsive: true,
					route: '/pages/employees/timesheets/approvals'
				}
			] : []),
		];
	}

	/**
	 * Translate context menus
	 */
	private _applyTranslationOnTabs() {
		this.translateService.onLangChange
			.pipe(
				tap(() => this._loadTabs()),
				untilDestroyed(this)
			)
			.subscribe();
	}

	ngOnDestroy(): void {}
}
