import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoundersRoutingModule } from './founders-routing.module';
import { FounderPageComponent } from './founder-page/founder-page.component';


@NgModule({
  declarations: [
    FounderPageComponent
  ],
  imports: [
    CommonModule,
    FoundersRoutingModule
  ]
})
export class FoundersModule { }
