import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from './forms-routing.module';
import { FirstFormComponent } from './components/first-form/first-form.component';
import { SecondFormComponent } from './components/second-form/second-form.component';
import { ThirdFormComponent } from './components/third-form/third-form.component';

import { FormService } from './form.service';

@NgModule({
  declarations: [FirstFormComponent, SecondFormComponent, ThirdFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsRoutingModule
  ],
  providers: [
    FormService
  ]
})
export class FormsModule { }
