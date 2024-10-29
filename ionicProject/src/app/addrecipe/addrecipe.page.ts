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
    console.log(this.username);
    console.log("this.route.snapshot.queryParamMap:",this.route.snapshot.queryParamMap);

    // Check if there is a recipe to edit from the navigation parameters
    const recipeData = this.route.snapshot.paramMap.get('recipe');
    console.log(recipeData);
    if (recipeData) {
      this.newRecipe = JSON.parse(recipeData); // Load the recipe for editing
      console.log("old rec:",this.newRecipe);
      // Preserve the username when editing
      this.newRecipe.username = this.username; // Ensure username is preserved
    } else {
      // If no recipe is loaded, set the username
      this.newRecipe.username = this.username;
    }
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

  saveRecipe() {
    // Ensure the username is correctly assigned before saving
    console.log()
    if (!this.newRecipe.username) {
      this.newRecipe.username = this.username; // Set username if not already set
    }
    console.log("this.newRecipe=", this.newRecipe);

    if (this.newRecipe.id) {
      // If there is an ID, update the existing recipe
      this.recipeService.updateRecipe(this.newRecipe);
    } else {
      // If no ID, set a new ID and add a new recipe
      this.newRecipe.id = new Date().getTime().toString();
      this.recipeService.addRecipe(this.newRecipe);
    }

    // Reset the form
    this.newRecipe = {};
    this.router.navigate(['/recipelist']);
  }
}
