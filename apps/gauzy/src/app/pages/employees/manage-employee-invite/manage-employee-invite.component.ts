import { Component } from '@angular/core';
import { InvitationTypeEnum } from '@worksuite/contracts';

@Component({
	selector: 'ga-manage-employee-invite',
	templateUrl: './manage-employee-invite.component.html'
})
export class ManageEmployeeInviteComponent {

	invitationTypeEnum = InvitationTypeEnum;

	constructor() {}
}
