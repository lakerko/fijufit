import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// services
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user:any = null;
  private username:string = localStorage.getItem('lastLoginUsername') || '';
  private password = 'h';
  private loading:Boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.loading = true;
    this.onLogin(this.userService
      .login(this.username, this.password));
      // .subscribe( this.onLogin, this.onLogin );
  }

  onLogin = (json) => {
    this.loading = false;

    if (!json.success) {
      // this.alertService.error('nepodarilo sa mi prihlasit :\'(');
      // alert( JSON.stringify(json) );
      // return;
    }

    localStorage.setItem('lastLoginUsername', this.username);
    this.user = json;
    // this.alertService.clear();

    this.router.navigate([ '/company' ]);
  }

}
