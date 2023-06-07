import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { filter, tap } from 'rxjs/operators';
import { NbAccordionComponent, NbAccordionItemComponent } from '@nebular/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as moment from 'moment';
import { IEmployee } from '@worksuite/contracts';
import { EmployeeStore } from './../../../../../@core/services';

@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'ga-edit-employee-settings',
	templateUrl: './edit-employee-other-settings.component.html',
	styleUrls: ['./edit-employee-other-settings.component.scss']
})
export class EditEmployeeOtherSettingsComponent implements OnInit, OnDestroy {

	selectedEmployee: IEmployee;
	/**
	 * Nebular Accordion Main Component
	 */
	accordion: NbAccordionComponent;
	@ViewChild('accordion') set content(content: NbAccordionComponent) {
		if (content) {
			this.accordion = content;
			this.cdr.detectChanges();
		}
	}

	/**
	 * Nebular Accordion Item Components
	 */
	@ViewChild('general') general: NbAccordionItemComponent;
	@ViewChild('integrations') integrations: NbAccordionItemComponent;

	/**
	 * Employee other settings settings
	 */
	public form: FormGroup = EditEmployeeOtherSettingsComponent.buildForm(this.fb);
	static buildForm(fb: FormBuilder): FormGroup {
		return fb.group({
			timeZone: [],
			upworkId: [],
			linkedInId: []
		});
	}

	constructor(
		private readonly cdr: ChangeDetectorRef,
		private readonly fb: FormBuilder,
		private readonly employeeStore: EmployeeStore
	) { }

	/**
	 *
	 */
	ngOnInit(): void {
		this.employeeStore.selectedEmployee$
			.pipe(
				filter((employee: IEmployee) => !!employee),
				tap((employee: IEmployee) => {
					this.selectedEmployee = employee;
					this._patchFormValue(employee);
				}),
				untilDestroyed(this)
			)
			.subscribe();
	}

	/**
	 *
	 * @param employee
	 * @returns
	 */
	private _patchFormValue(employee: IEmployee) {
		if (!employee) {
			return;
		}
		const { user } = employee;
		this.form.patchValue({
			timeZone: user.timeZone || moment.tz.guess(), // set current timezone, if employee don't have any timezone
			upworkId: employee.upworkId,
			linkedInId: employee.linkedInId,
		});
		this.form.updateValueAndValidity();
	}

	/**
	 *
	 * @param form
	 * @returns
	 */
	onSubmit(form: NgForm) {
		if (form.invalid) {
			return;
		}
		const { organizationId, tenantId } = this.selectedEmployee;
		const { timeZone, upworkId, linkedInId } = this.form.value;

		/** Update user fields */
		this.employeeStore.userForm = {
			timeZone
		};

		/** Update employee fields */
		this.employeeStore.employeeForm = {
			upworkId,
			linkedInId,
			organizationId,
			tenantId
		};
	}

	/**
	 *
	 */
	ngOnDestroy(): void { }
}
