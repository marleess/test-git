import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApegPage } from './apeg.page';

const routes: Routes = [
  {
    path: '',
    component: ApegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApegPageRoutingModule {}
