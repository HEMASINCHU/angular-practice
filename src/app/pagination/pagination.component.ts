import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  msg: any;
  // Pages = ['firstPage', 'secondPage', 'thirdPage', 'lastPage'];
  Pages=[{title:"firstPage",description:"starting the first"},{
    title:"secondPage",description:"This is second page"},{
      title:"thirdPage",description:"This is third page"
  }]
  currentPage = 0;

  clickleft() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
  clickright() {
    if(this.currentPage < this.Pages.length -1){
    this.currentPage++;
    }
  }
}
