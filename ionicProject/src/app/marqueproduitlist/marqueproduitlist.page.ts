import { Component, OnInit } from '@angular/core';
import { MarqueproduitService } from '../marqueproduit.service';

@Component({
  selector: 'app-marqueproduitlist',
  templateUrl: './marqueproduitlist.page.html',
  styleUrls: ['./marqueproduitlist.page.scss'],
})
export class MarqueproduitlistPage implements OnInit {
  marqueproduits: Array<any> = [];

  constructor(private marqueproduitService: MarqueproduitService) {}

  ngOnInit() {
    // Charger la liste des Marqueproduits depuis le service
    this.marqueproduits = this.marqueproduitService.getMarqueproduits();
  }
}
