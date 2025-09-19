import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector:'book-search', // 该组件在HTML的标签说明, 如 <app-profile>
  templateUrl:'./book-search.component.html', // 模板绑定：把 TS 里的数据“绑”到 HTML
  imports:[FormsModule,CommonModule]
  // 对应修复的是html里的'ngModel', '*ngIf/For'
})

// 组件的逻辑部分: (相当于 React/Next 的“组件函数”)
export class BookSearchComponent {
  keyword=''  // 存用户输入（输入框值 ↔ keyword 同步）
  books:any[]=[]  // 存 API 返回的数据，供页面显示
  constructor(private http:HttpClient){}
  search() {  // 方法：根据 keyword 调 API
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.keyword}`;
    this.http.get(url).subscribe((res: any) => {
      console.log(res)
      this.books = res.items || []})
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
}

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
