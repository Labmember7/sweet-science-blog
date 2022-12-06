import { Component } from '@angular/core';
import { FormService } from './form.service';
import { ArticleBase } from './article-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormService]
})
export class AppComponent {
  title = 'sweet-science-blog';
  questions$: Observable<ArticleBase<any>[]>;

  constructor(service: FormService) {
    this.questions$ = service.getQuestions();
  }
}
