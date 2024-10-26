import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chefhome',
  templateUrl: './chefhome.page.html',
  styleUrls: ['./chefhome.page.scss'],
})
export class ChefhomePage implements OnInit {
  username: any = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
  }
  navigateToAddRecipe() {
    this.router.navigate(['/addrecipe'], {
      queryParams: { username: this.username },
    });
  }
  navigateToMesRecettes() {
    this.router.navigate(['/mesrecette'], {
      queryParams: { username: this.username },
    });
  }

  navigateToAddProduct() {
    this.router.navigate(['/addmarqueproduit']);
  }
  
}




