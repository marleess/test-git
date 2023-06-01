import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpegPage } from './cpeg.page';

const routes: Routes = [
  {
    path: '',
    component: CpegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpegPageRoutingModule {}
