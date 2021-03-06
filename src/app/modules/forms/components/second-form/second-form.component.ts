import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss']
})
export class SecondFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  private unsubscribe: Subscription[] = [];

  constructor(
    private fs: FormService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      comment: this.fs.formDataSubject.value.comment,
      description: this.fs.formDataSubject.value.description
    })
  }

  ngOnInit(): void {
    const formSub = this.form.valueChanges.subscribe(data => {
      this.fs.formDataSubject.next(data);
    });

    this.unsubscribe.push(formSub);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
