import { Injectable } from '@angular/core';

import { TopicDropdown } from './topics-dropdown';
import { ArticleBase } from './article-base';
import { TitleTextbox } from './title-textbox';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  // TODO: get from a remote source of question metadata
  getQuestions() {

    const formFields: ArticleBase<string>[] = [

      new TopicDropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),

      new TitleTextbox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TitleTextbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(formFields.sort((a, b) => a.order - b.order));
  }
}
