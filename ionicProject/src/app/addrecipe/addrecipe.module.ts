import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddrecipePageRoutingModule } from './addrecipe-routing.module';

import { AddrecipePage } from './addrecipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddrecipePageRoutingModule
  ],
  declarations: [AddrecipePage]
})
export class AddrecipePageModule {}
