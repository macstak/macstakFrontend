import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Shared1RoutingModule } from './shared1-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, MobileNavbarComponent],
  imports: [CommonModule, FontAwesomeModule, Shared1RoutingModule],
  exports: [NavbarComponent, FooterComponent],
})
export class Shared1Module {}
