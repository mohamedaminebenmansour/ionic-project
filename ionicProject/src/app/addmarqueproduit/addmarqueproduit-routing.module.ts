import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddmarqueproduitPage } from './addmarqueproduit.page';

const routes: Routes = [
  {
    path: '',
    component: AddmarqueproduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmarqueproduitPageRoutingModule {}
