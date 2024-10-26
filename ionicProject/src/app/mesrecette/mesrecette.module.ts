import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesrecettePageRoutingModule } from './mesrecette-routing.module';

import { MesrecettePage } from './mesrecette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesrecettePageRoutingModule
  ],
  declarations: [MesrecettePage]
})
export class MesrecettePageModule {}
