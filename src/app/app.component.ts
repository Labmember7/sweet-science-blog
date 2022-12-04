import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search: string = '';
  title: string = '🧁Sci-BLOG';
  topics: string[] = ['Math', 'Physics', 'Economie'];
}
