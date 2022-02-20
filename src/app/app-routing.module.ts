import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/homepage.module').then((m) => m.HomepageModule),
  },

  {
    path: 'founders',
    loadChildren: () =>
      import('./pages/founders/founders.module').then((m) => m.FoundersModule),
  },

  {
    path: '**',
    loadChildren: () =>
      import('./pages/error/error.module').then((m) => m.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
