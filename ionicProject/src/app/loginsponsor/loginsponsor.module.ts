import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginsponsorPageRoutingModule } from './loginsponsor-routing.module';

import { LoginsponsorPage } from './loginsponsor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginsponsorPageRoutingModule
  ],
  declarations: [LoginsponsorPage]
})
export class LoginsponsorPageModule {}
