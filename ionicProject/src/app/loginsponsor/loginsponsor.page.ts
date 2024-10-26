import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsponsor',
  templateUrl: './loginsponsor.page.html',
  styleUrls: ['./loginsponsor.page.scss'],
})
export class LoginsponsorPage  {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/sponsorhome', { username: this.username }]);
  }
}
