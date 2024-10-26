import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sponsorhome',
  templateUrl: './sponsorhome.page.html',
  styleUrls: ['./sponsorhome.page.scss'],
})
export class SponsorhomePage implements OnInit {
  username: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
   
  }

  launchCompetition() {
    // Redirigez l'utilisateur vers la page d'ajout de compétition
    this.router.navigate(['/addcompetition']);
  }

  logout() {
    this.router.navigate(['/home']);
  }
}
