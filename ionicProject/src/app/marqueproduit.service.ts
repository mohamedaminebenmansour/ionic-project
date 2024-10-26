import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MarqueproduitService {
  private readonly MARQUEPRODUITS_KEY = 'marqueproduits';
  private marqueproduits: Array<any> = [];

  constructor() {
    // Charger les Marqueproduits depuis le stockage local au démarrage du service
    const storedMarqueproduits = localStorage.getItem(this.MARQUEPRODUITS_KEY);
    if (storedMarqueproduits) {
      this.marqueproduits = JSON.parse(storedMarqueproduits);
    }
  }

  private saveMarqueproduitsToLocalStorage() {
    // Enregistrer les Marqueproduits dans le stockage local
    localStorage.setItem(
      this.MARQUEPRODUITS_KEY,
      JSON.stringify(this.marqueproduits)
    );
  }

  addMarqueproduit(marqueproduit: any) {
    this.marqueproduits.push(marqueproduit);
    this.saveMarqueproduitsToLocalStorage(); // Sauvegarder les Marqueproduits dans le stockage local
  }

  getMarqueproduits() {
    return this.marqueproduits;
  }
}
