import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormData } from './models/form.model';

@Injectable()
export class FormService {

  public formDataSubject: BehaviorSubject<FormData> = new BehaviorSubject({
    comment: '',
    description: ''
  });

  get formData() {
    return this.formDataSubject.asObservable();
  }

  constructor() { }
}
