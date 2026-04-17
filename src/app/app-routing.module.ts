import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
const routes: Routes = [
  {
    path:'',component:HeroBannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
