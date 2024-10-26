import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  private readonly COMPETITIONS_KEY = 'competitions';
  private competitions: Array<any> = [];

  constructor() {
    // Charger les compétitions depuis le stockage local au démarrage du service
    const storedCompetitions = localStorage.getItem(this.COMPETITIONS_KEY);
    if (storedCompetitions) {
      this.competitions = JSON.parse(storedCompetitions);
    }
  }

  private saveCompetitionsToLocalStorage() {
    // Enregistrer les compétitions dans le stockage local
    localStorage.setItem(
      this.COMPETITIONS_KEY,
      JSON.stringify(this.competitions)
    );
  }

  addCompetition(competition: any) {
    // Générez un ID unique pour la compétition (vous pouvez utiliser une bibliothèque comme uuid)
    competition.id = this.generateUniqueId();
    this.competitions.push(competition);
    this.saveCompetitionsToLocalStorage(); // Sauvegarder les compétitions dans le stockage local
  }

  getCompetitions() {
    return this.competitions;
  }

  getCompetitionById(competitionId: number) {
    return this.competitions.find(
      (competition) => competition.id === competitionId
    );
  }

  // Ajoutez d'autres méthodes de service selon vos besoins

  private generateUniqueId(): number {
    // Générez un ID unique (vous pouvez utiliser une bibliothèque comme uuid)
    return Math.floor(Math.random() * Date.now());
  }
}
