import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ArticleBase } from './article-base';
@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  toFormGroup(fields: ArticleBase<string>[]) {
    const group: any = {};

    fields.forEach(field => {
      group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
        : new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }
}
