import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginsponsorPage } from './loginsponsor.page';

const routes: Routes = [
  {
    path: '',
    component: LoginsponsorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginsponsorPageRoutingModule {}
