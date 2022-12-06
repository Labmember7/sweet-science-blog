import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ArticleBase } from '../article-base';
import { FormControlService } from '../form-control.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
  providers: [FormControlService]
})
export class ArticleFormComponent {
  @Input() questions: ArticleBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private fields: FormControlService) { }

  ngOnInit() {
    this.form = this.fields.toFormGroup(this.questions as ArticleBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
