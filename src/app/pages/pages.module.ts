import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
