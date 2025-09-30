import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from './book-search.service';
import { HistoryComponent } from './history.component';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [CommonModule, FormsModule, HistoryComponent],
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
  providers: [BookService]
})
export class BookSearchComponent {
  query: string = '';        // 输入框的文本
  books: any[] = [];         // 搜索结果
  loading = false;           // 加载状态
  searchHistory: string[] = []; // 搜索历史

  constructor(private bookService: BookService) {}

  searchBooks() {
    const searchTerm = this.query.trim();  // 去掉首尾空格
    if (!searchTerm) return;

    // 保存历史记录，最多10条
    if (!this.searchHistory.includes(searchTerm)) {
      this.searchHistory.unshift(searchTerm);
      if (this.searchHistory.length > 10) this.searchHistory.pop();
    }

    this.loading = true;
    this.bookService.searchBooks(searchTerm).subscribe({
      next: (res: any) => {
        this.books = res.items || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }


  openBook(book: any) {
    const url = book.volumeInfo.infoLink;
    if (url) {
      window.open(url, "_blank");
      // _blank	  新标签页打开
      // _self	  当前页面打开
      // _parent	在父框架打开（如果有 iframe）
      // _top	    在最顶层窗口打开（跳出嵌套 iframe）
    } else {
      alert("没有可用的详情链接");
    }
  }

  onSelectHistory(item: string) {
    this.query = item;
    this.searchBooks();
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
