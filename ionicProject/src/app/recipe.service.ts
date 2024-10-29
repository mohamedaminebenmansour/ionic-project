import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly RECIPES_KEY = 'recipes';
  private recipes: Array<any> = [];

  constructor() {
    // Load recipes from local storage when the service is initialized
    const storedRecipes = localStorage.getItem(this.RECIPES_KEY);
    if (storedRecipes) {
      this.recipes = JSON.parse(storedRecipes);
    }
  }

  private saveRecipesToLocalStorage() {
    // Save recipes to local storage
    localStorage.setItem(this.RECIPES_KEY, JSON.stringify(this.recipes));
  }

  addRecipe(recipe: any) {
    recipe.id = new Date().getTime(); // Generate a unique ID based on timestamp
    this.recipes.push(recipe);
    this.saveRecipesToLocalStorage(); // Save updated recipes
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipesByUsername(username: string): Array<any> {
    return this.recipes.filter((recipe) => recipe.username === username);
  }

  updateRecipe(updatedRecipe: any) {
    this.recipes = this.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    this.saveRecipesToLocalStorage(); // Save changes to local storage
  }

  deleteRecipe(recipeId: number) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
    this.saveRecipesToLocalStorage(); // Save changes to local storage
  }
}
