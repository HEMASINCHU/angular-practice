import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() page: any = 1;

  @Input() totalRecords: any;
  @Output() onPageChange = new EventEmitter<number>();

  addNewItem(value: number) {}

  constructor() {
    console.log(this.page);
  }

  currentPage = 0;

  clickleft() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.onPageChange.emit(this.currentPage);
    }
  }
  clickright() {
    if (this.currentPage < this.totalRecords - 1) {
      this.currentPage++;
      this.onPageChange.emit(this.currentPage);
    }
  }
}
