import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetitionlistPageRoutingModule } from './competitionlist-routing.module';

import { CompetitionlistPage } from './competitionlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetitionlistPageRoutingModule
  ],
  declarations: [CompetitionlistPage]
})
export class CompetitionlistPageModule {}
