import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcompetitionPageRoutingModule } from './addcompetition-routing.module';

import { AddcompetitionPage } from './addcompetition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcompetitionPageRoutingModule
  ],
  declarations: [AddcompetitionPage]
})
export class AddcompetitionPageModule {}
