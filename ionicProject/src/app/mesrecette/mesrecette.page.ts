import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

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
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    // Récupérer le nom d'utilisateur depuis les paramètres de la requête
    this.username = this.route.snapshot.queryParamMap.get('username');

    // Filtrer les recettes par nom d'utilisateur
    this.myRecipes = this.recipeService.getRecipesByUsername(this.username);
  }
}
