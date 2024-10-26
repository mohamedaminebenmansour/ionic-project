import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarqueproduitlistPage } from './marqueproduitlist.page';

const routes: Routes = [
  {
    path: '',
    component: MarqueproduitlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarqueproduitlistPageRoutingModule {}
