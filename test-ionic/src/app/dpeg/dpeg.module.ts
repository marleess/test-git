import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DpegPageRoutingModule } from './dpeg-routing.module';

import { DpegPage } from './dpeg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DpegPageRoutingModule
  ],
  declarations: [DpegPage]
})
export class DpegPageModule {}
