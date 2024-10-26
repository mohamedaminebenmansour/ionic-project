import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SponsorhomePageRoutingModule } from './sponsorhome-routing.module';

import { SponsorhomePage } from './sponsorhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SponsorhomePageRoutingModule
  ],
  declarations: [SponsorhomePage]
})
export class SponsorhomePageModule {}
