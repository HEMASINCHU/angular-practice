import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {


  pageSize = 5;
  @Input() page: any = 1;
  @Input() totalRecords:number =0;
  @Output() onPageChange = new EventEmitter<number>();

  addNewItem(value: number) {}

  constructor() {
    console.log(this.page);
  }

  currentPage = 1;
  disabled =true;
  clickleft() {
    if (this.currentPage >= 1) {
      this.currentPage--;
      this.onPageChange.emit(this.currentPage);
    }
  }
  clickright() {
    if (this.currentPage <= (this.totalRecords/this.pageSize) ) {
      this.currentPage++;
      this.onPageChange.emit(this.currentPage);
    }
  }
}
