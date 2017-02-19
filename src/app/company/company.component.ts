import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'company-v3',
	templateUrl: './company.component.html',
	styleUrls: ['company.component.scss'],
	// encapsulation: ViewEncapsulation.None,
})
export class CompanyComponent {

	// isDevSite = (window.location.host == 'v3ng.brm.sk');

	constructor(
		private router: Router,
	) { }
}
