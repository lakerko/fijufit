import { NgModule }			from '@angular/core';
import { RouterModule }		from '@angular/router';

import { CompanyComponent }	from './company/company.component';
// import { LoginComponent }	from './login/login.component';


@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '',			component: CompanyComponent },
			// { path: 'login',	component: LoginComponent },
			{ path: 'company',		component: CompanyComponent },
		])
	],
	exports: [
		RouterModule
	]
})
export class AppRouting {}
