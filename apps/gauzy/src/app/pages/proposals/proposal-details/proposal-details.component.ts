import { Component, OnInit, SecurityContext } from '@angular/core';
import { Store } from '../../../@core/services/store.service';
import { ProposalViewModel } from '../proposals.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
	selector: 'ngx-proposal-details',
	templateUrl: './proposal-details.component.html',
	styleUrls: ['./proposal-details.component.scss']
})
export class ProposalDetailsComponent implements OnInit {
	constructor(
		private store: Store,
		private sanitizer: DomSanitizer,
		private router: Router
	) {}

	proposal: ProposalViewModel;
	jobPost: SafeHtml;
	author: string;

	ngOnInit() {
		this.proposal = this.store.selectedProposal;

		if (!this.proposal) {
			this.router.navigate([`/pages/proposals`]);
		}

		this.jobPost = this.sanitizer.bypassSecurityTrustHtml(
			this.proposal.jobPostUrl
		);

		if (!this.proposal.author) {
			this.author =
				this.store.selectedEmployee.firstName +
				' ' +
				this.store.selectedEmployee.lastName;
		} else {
			this.author = this.proposal.author;
		}
	}

	edit() {
		this.router.navigate([`/pages/proposals/edit/${this.proposal.id}`]);
	}
}
