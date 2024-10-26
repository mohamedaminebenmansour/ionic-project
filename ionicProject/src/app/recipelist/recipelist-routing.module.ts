import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipelistPage } from './recipelist.page';

const routes: Routes = [
  {
    path: '',
    component: RecipelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipelistPageRoutingModule {}
