import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesrecettePage } from './mesrecette.page';

const routes: Routes = [
  {
    path: '',
    component: MesrecettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesrecettePageRoutingModule {}
