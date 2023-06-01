import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BpegPageRoutingModule } from './bpeg-routing.module';

import { BpegPage } from './bpeg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BpegPageRoutingModule
  ],
  declarations: [BpegPage]
})
export class BpegPageModule {}
