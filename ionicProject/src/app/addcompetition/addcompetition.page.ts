import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../competition.service';


@Component({
  selector: 'app-addcompetition',
  templateUrl: './addcompetition.page.html',
  styleUrls: ['./addcompetition.page.scss'],
})
export class AddcompetitionPage implements OnInit {
  newCompetition: any = {};

  constructor(
    private competitionService: CompetitionService,
    private router: Router
  ) {}

  ngOnInit() {}

  addCompetition() {
    this.competitionService.addCompetition(this.newCompetition);
    // Réinitialisez le formulaire
    this.newCompetition = {};
    // Redirigez vers la liste des compétitions après avoir ajouté
    this.router.navigate(['/competitionlist']);
  }
}
