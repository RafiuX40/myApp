import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Iphone12Component } from './iphone12/iphone12.component';
import { Iphone13Component } from './iphone13/iphone13.component';
import { Iphone14Component } from './iphone14/iphone14.component';
import { Iphone15Component } from './iphone15/iphone15.component';
import { Iphone16Component } from './iphone16/iphone16.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'about',
    component: AboutComponent

  },
  
  {
    path: 'iphone12',
    component: Iphone12Component
  },

  {
    path: 'iphone13',
    component: Iphone13Component
  },

  {
    path: 'iphone14',
    component: Iphone14Component
  },

  {
    path: 'iphone15',
    component: Iphone15Component
  },
  {
    path: 'iphone16',
    component: Iphone16Component
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
