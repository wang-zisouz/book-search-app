import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  @Input() history: string[] = [];            // 接收父组件传来的搜索历史
  @Output() select = new EventEmitter<string>(); // 点击历史项触发事件

  onClick(item: string) {
    this.select.emit(item);
  }
}
