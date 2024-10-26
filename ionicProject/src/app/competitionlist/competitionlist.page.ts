import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../competition.service';

@Component({
  selector: 'app-competitionlist',
  templateUrl: './competitionlist.page.html',
  styleUrls: ['./competitionlist.page.scss'],
})
export class CompetitionlistPage implements OnInit {
  competitions: Array<any> = [];

  constructor(
    private competitionService: CompetitionService,
    private router: Router
  ) {}

  ngOnInit() {
    // Chargez la liste des compétitions depuis le service
    this.competitions = this.competitionService.getCompetitions();
  }

  ionViewWillEnter() {
    // Utilisez ionViewWillEnter pour mettre à jour la liste chaque fois que la page est affichée
    this.competitions = this.competitionService.getCompetitions();
  }

  viewCompetitionDetails(competitionId: number) {
    // Redirigez vers la page de détails de la compétition avec l'ID de la compétition
    this.router.navigate(['/competitiondetails', competitionId]);
  }
}
