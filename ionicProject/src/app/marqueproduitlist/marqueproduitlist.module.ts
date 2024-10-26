import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarqueproduitlistPageRoutingModule } from './marqueproduitlist-routing.module';

import { MarqueproduitlistPage } from './marqueproduitlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarqueproduitlistPageRoutingModule
  ],
  declarations: [MarqueproduitlistPage]
})
export class MarqueproduitlistPageModule {}
