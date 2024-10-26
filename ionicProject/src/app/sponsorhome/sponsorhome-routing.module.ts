import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SponsorhomePage } from './sponsorhome.page';

const routes: Routes = [
  {
    path: '',
    component: SponsorhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SponsorhomePageRoutingModule {}
