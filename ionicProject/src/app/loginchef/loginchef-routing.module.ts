import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginchefPage } from './loginchef.page';

const routes: Routes = [
  {
    path: '',
    component: LoginchefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginchefPageRoutingModule {}
