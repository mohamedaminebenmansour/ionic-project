import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChefhomePageRoutingModule } from './chefhome-routing.module';

import { ChefhomePage } from './chefhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChefhomePageRoutingModule
  ],
  declarations: [ChefhomePage]
})
export class ChefhomePageModule {}
