import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'company-page',
	templateUrl: './company.component.html',
	styleUrls: ['company.component.scss'],
	// encapsulation: ViewEncapsulation.None,
})
export class CompanyComponent {

	constructor(
		private router: Router,
	) { }
}
