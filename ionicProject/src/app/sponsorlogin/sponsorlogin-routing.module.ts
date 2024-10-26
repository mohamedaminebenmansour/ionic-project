import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SponsorloginPage } from './sponsorlogin.page';

const routes: Routes = [
  {
    path: '',
    component: SponsorloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SponsorloginPageRoutingModule {}
