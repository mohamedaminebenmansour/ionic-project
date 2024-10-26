import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SponsorloginPageRoutingModule } from './sponsorlogin-routing.module';

import { SponsorloginPage } from './sponsorlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SponsorloginPageRoutingModule
  ],
  declarations: [SponsorloginPage]
})
export class SponsorloginPageModule {}
