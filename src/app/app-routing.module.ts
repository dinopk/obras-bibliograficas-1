import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'authors',
    loadChildren: () =>
      import('./view/authors/authors.module').then((m) => m.AuthorsModule),
  },
  {
    path: '',
    redirectTo: 'authors',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'authors',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
