import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.page.html',
  styleUrls: ['./addrecipe.page.scss'],
})
export class AddrecipePage implements OnInit {
  newRecipe: any = {};
  username: any = '';

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.username = this.route.snapshot.queryParamMap.get('username');
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.newRecipe.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  addRecipe() {
    this.newRecipe.username=this.username;
    this.recipeService.addRecipe(this.newRecipe);
    // Réinitialisez le formulaire
    this.newRecipe = {};
    this.router.navigate(['/recipelist']);
  }
}
