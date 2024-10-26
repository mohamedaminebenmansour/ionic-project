import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipelistPageRoutingModule } from './recipelist-routing.module';

import { RecipelistPage } from './recipelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipelistPageRoutingModule
  ],
  declarations: [RecipelistPage]
})
export class RecipelistPageModule {}
