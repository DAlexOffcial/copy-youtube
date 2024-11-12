import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { CategoryPillsComponent } from './components/category-pills/category-pills.component';
import { VideoGridItemComponent } from './components/video-grid-item/video-grid-item.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SmallSideBarItemComponent } from './components/small-side-bar-item/small-side-bar-item.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    CategoryPillsComponent,
    VideoGridItemComponent,
    SideBarComponent,
    SmallSideBarItemComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }
