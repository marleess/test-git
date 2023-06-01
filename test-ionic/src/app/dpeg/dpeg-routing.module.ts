import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DpegPage } from './dpeg.page';

const routes: Routes = [
  {
    path: '',
    component: DpegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DpegPageRoutingModule {}
