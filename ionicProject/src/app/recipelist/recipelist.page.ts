import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.page.html',
  styleUrls: ['./recipelist.page.scss'],
})
export class RecipelistPage implements OnInit {
deleteRecipe(_t14: number) {
throw new Error('Method not implemented.');
}
  recipes: Array<any> = [];

  constructor(
    private recipeService: RecipeService,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}