import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FounderPageComponent } from './founder-page/founder-page.component';

const routes: Routes = [{ path: '', component: FounderPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoundersRoutingModule {}
