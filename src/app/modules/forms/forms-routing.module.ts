import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstFormComponent } from './components/first-form/first-form.component';
import { SecondFormComponent } from './components/second-form/second-form.component';
import { ThirdFormComponent } from './components/third-form/third-form.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'first', pathMatch: 'full'
  },
  {
    path: 'first', component: FirstFormComponent,
  },
  {
    path: 'second', component: SecondFormComponent
  },
  {
    path: 'third', component: ThirdFormComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
