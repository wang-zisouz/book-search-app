import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-book-search',
  standalone: true,
  templateUrl: './book-search.component.html',
  imports: [FormsModule, CommonModule]
})
export class BookSearchComponent {
  keyword = '';
  books: any[] = [];

  constructor(private http: HttpClient) {}

  search() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.keyword}`;
    this.http.get(url).subscribe((res: any) => {
      console.log(res);
      this.books = res.items || [];
    });
  }
}

  // 输入框 (ngModel) ↔ keyword
  //        ↓ 点击按钮
  // 调用 search() → this.http.get(url)
  //        ↓
  // API 返回数据 (res)
  //        ↓
  // 存到 books
  //        ↓
  // HTML 模板 (*ngFor) 展示书籍

// function BookSearch() {
//   const [keyword, setKeyword] = useState('');
//   const [books, setBooks] = useState([]);

//   const search = async () => {
//     const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`);
//     const data = await res.json();
//     setBooks(data.items || []);
//   };

//   return (
//     <>
//       <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
//       <button onClick={search}>搜索</button>
//       {books.map(book => <div key={book.id}>{book.volumeInfo.title}</div>)}
//     </>
//   );
// }
