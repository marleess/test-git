import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpegPageRoutingModule } from './cpeg-routing.module';

import { CpegPage } from './cpeg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpegPageRoutingModule
  ],
  declarations: [CpegPage]
})
export class CpegPageModule {}
