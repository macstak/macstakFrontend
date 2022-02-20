import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoundersRoutingModule } from './founders-routing.module';
import { FounderPageComponent } from './founder-page/founder-page.component';
import { Shared1Module } from 'src/app/shared1/shared1.module';

@NgModule({
  declarations: [FounderPageComponent],
  imports: [CommonModule, FoundersRoutingModule, Shared1Module],
})
export class FoundersModule {}
