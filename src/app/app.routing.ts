import { NgModule }			from '@angular/core';
import { RouterModule }		from '@angular/router';

import { CompanyComponent }	from './company/company.component';
import { LoginComponent }	from './login/login.component';


@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '',			component: LoginComponent },
			{ path: 'login',	component: LoginComponent },
			{ path: 'company',		component: CompanyComponent },
		])
	],
	exports: [
		RouterModule
	]
})
export class AppRouting {}
