import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.page.html',
  styleUrls: ['./loginuser.page.scss'],
})
export class LoginuserPage implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private router: Router) {}

  ngOnInit() {}
  login() {
    this.router.navigate(['/userhome', { username: this.username }]);
  }
}
