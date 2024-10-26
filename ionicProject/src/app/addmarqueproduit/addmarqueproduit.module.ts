import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmarqueproduitPageRoutingModule } from './addmarqueproduit-routing.module';

import { AddmarqueproduitPage } from './addmarqueproduit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddmarqueproduitPageRoutingModule
  ],
  declarations: [AddmarqueproduitPage]
})
export class AddmarqueproduitPageModule {}
