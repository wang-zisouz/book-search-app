import { Component, signal } from '@angular/core';
import { BookSearchComponent } from './book-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookSearchComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('book-search-app');
}
