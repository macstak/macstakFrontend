import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Shared1RoutingModule } from './shared1-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, Shared1RoutingModule],
  exports: [NavbarComponent, FooterComponent],
})
export class Shared1Module {}
