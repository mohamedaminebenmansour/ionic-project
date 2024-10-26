import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly RECIPES_KEY = 'recipes';
  private recipes: Array<any> = [];

  constructor() {
    // Charger les recettes depuis le stockage local au démarrage du service
    const storedRecipes = localStorage.getItem(this.RECIPES_KEY);
    if (storedRecipes) {
      this.recipes = JSON.parse(storedRecipes);
    }
  }

  private saveRecipesToLocalStorage() {
    // Enregistrer les recettes dans le stockage local
    localStorage.setItem(this.RECIPES_KEY, JSON.stringify(this.recipes));
  }

  addRecipe(recipe: any) {
    this.recipes.push(recipe);
    this.saveRecipesToLocalStorage(); // Sauvegarder les recettes dans le stockage local
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipesByUsername(username: string): Array<any> {
  
    return this.recipes.filter((recipe) => recipe.username === username);
  }
}
