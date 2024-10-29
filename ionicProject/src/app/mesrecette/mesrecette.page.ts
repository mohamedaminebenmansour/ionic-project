import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mesrecette',
  templateUrl: './mesrecette.page.html',
  styleUrls: ['./mesrecette.page.scss'],
})
export class MesrecettePage implements OnInit {
  username: any = '';
  myRecipes: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // Get username from route query parameters
    this.username = this.route.snapshot.queryParamMap.get('username');
    // Fetch recipes filtered by username
    this.myRecipes = this.recipeService.getRecipesByUsername(this.username);
  }

  // Navigate to the add/edit page with recipe data for updating
  updateRecipe(recipe: any) {
    this.navCtrl.navigateForward(['/addrecipe', { recipe: JSON.stringify(recipe) }]);
  }

  // Delete recipe by id and refresh the displayed list
  deleteRecipe(recipeId: number) {
    this.recipeService.deleteRecipe(recipeId);
    this.myRecipes = this.recipeService.getRecipesByUsername(this.username);
  }
}
