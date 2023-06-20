import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import data from "../data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
cards = data;
 pageResult = this.cards.slice(0,5)
 currentPage =1;
 page_size = 5;



  constructor(private http: HttpClient){
    
    console.log(data)

  }
  
  
 
 addItem(pageNum: number) {
  this.pageResult = this.paginate(pageNum);
}

 paginate( page_number:number) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return this.cards.slice((page_number - 1) * this.page_size, page_number * this.page_size);
}

}
