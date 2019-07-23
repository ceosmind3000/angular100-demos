import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {

  }

  // changeLogin() {
  //   // this.loggedIn = !this.loggedIn;
  //   // if (this.loggedIn) {
  //      this.authService.login('user', 'root');
  //      this.router.navigateByUrl(this.authService.redirectUrl);
  //   // }
  // }

  login() {
    this.authService.login('user', 'root');
    if (!this.authService.redirectUrl) {
      this.authService.redirectUrl = '/home';
    }
    this.router.navigateByUrl(this.authService.redirectUrl);
  }

  logout() {
    this.authService.logout();
    this.authService.redirectUrl = '/login';
  }

}
