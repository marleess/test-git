import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'apeg',
    loadChildren: () => import('./apeg/apeg.module').then( m => m.ApegPageModule)
  },
  {
    path: 'bpeg',
    loadChildren: () => import('./bpeg/bpeg.module').then( m => m.BpegPageModule)
  },
  {
    path: 'cpeg',
    loadChildren: () => import('./cpeg/cpeg.module').then( m => m.CpegPageModule)
  },
  {
    path: 'dpeg',
    loadChildren: () => import('./dpeg/dpeg.module').then( m => m.DpegPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
