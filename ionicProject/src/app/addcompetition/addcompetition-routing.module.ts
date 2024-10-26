import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcompetitionPage } from './addcompetition.page';

const routes: Routes = [
  {
    path: '',
    component: AddcompetitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcompetitionPageRoutingModule {}
