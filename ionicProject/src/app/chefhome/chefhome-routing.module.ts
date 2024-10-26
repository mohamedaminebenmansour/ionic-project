import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChefhomePage } from './chefhome.page';

const routes: Routes = [
  {
    path: '',
    component: ChefhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChefhomePageRoutingModule {}
