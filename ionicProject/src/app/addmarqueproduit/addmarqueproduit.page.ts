import { Component, OnInit } from '@angular/core';
import { MarqueproduitService } from '../marqueproduit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addmarqueproduit',
  templateUrl: './addmarqueproduit.page.html',
  styleUrls: ['./addmarqueproduit.page.scss'],
})
export class AddmarqueproduitPage implements OnInit {
  newMarqueproduit: any = {};

  constructor(
    private marqueproduitService: MarqueproduitService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.newMarqueproduit.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  addMarqueproduit() {
    this.newMarqueproduit.id= new Date().getTime().toString();
    this.marqueproduitService.addMarqueproduit(this.newMarqueproduit);
    this.newMarqueproduit = {};
    this.router.navigate(['/marqueproduitlist']);
  }
}
