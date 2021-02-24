import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'form', pathMatch: 'full'
  },
  {
    path: 'form',
    loadChildren: () => import('./modules/forms/forms.module').then(m => m.FormsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
