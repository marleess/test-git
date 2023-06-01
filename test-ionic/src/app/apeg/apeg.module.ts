import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApegPageRoutingModule } from './apeg-routing.module';

import { ApegPage } from './apeg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApegPageRoutingModule
  ],
  declarations: [ApegPage]
})
export class ApegPageModule {}
