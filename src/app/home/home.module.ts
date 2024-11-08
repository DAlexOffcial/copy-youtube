import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { CategoryPillsComponent } from './components/category-pills/category-pills.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    CategoryPillsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }
