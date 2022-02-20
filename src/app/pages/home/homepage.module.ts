import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { Shared1Module } from 'src/app/shared1/shared1.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomepageRoutingModule, Shared1Module],
})
export class HomepageModule {}
