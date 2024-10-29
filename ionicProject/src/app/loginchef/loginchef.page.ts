import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginchef',
  templateUrl: './loginchef.page.html',
  styleUrls: ['./loginchef.page.scss'],
})
export class LoginchefPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/chefhome', { username: this.username }]);
  }
  signUp(){
    this.router.navigate(['/signupchef']);
  }
}
