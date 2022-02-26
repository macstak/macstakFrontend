import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Shared1Module } from 'src/app/shared1/shared1.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CertificateRoutingModule,
    FontAwesomeModule,
    Shared1Module,
  ],
})
export class CertificateModule {}
