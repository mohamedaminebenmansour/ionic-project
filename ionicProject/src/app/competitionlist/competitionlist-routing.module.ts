import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetitionlistPage } from './competitionlist.page';

const routes: Routes = [
  {
    path: '',
    component: CompetitionlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetitionlistPageRoutingModule {}
