import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookSearchComponent } from "./book-search.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookSearchComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('book-search-app');
}
