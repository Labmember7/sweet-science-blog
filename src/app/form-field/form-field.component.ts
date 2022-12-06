import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ArticleBase } from '../article-base';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent {
  @Input() field!: ArticleBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }
}
