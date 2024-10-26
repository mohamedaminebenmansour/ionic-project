import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginchefPageRoutingModule } from './loginchef-routing.module';

import { LoginchefPage } from './loginchef.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginchefPageRoutingModule
  ],
  declarations: [LoginchefPage]
})
export class LoginchefPageModule {}
