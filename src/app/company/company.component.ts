import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
// services
import { UserService } from '../services/user.service';
// components
import { HeaderComponent } from '../header/header.component';


@Component({
	selector: 'company-page',
	templateUrl: './company.component.html',
	styleUrls: ['company.component.scss'],
	// encapsulation: ViewEncapsulation.None,
})
export class CompanyComponent {
  private user:any = null;

	constructor(
		private router: Router,
    private userService: UserService,
	) {
    this.user = this.userService.getUser();
    if (!this.user) this.router.navigate([ '/login' ]);
  }
}
