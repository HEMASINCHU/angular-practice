import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import data from '../data';
import { CommonModule } from '@angular/common';
import { FilterbuttonComponent } from '../filterbutton/filterbutton.component';
import { HeaderComponent } from '../header/header.component';
import { MenubarComponent } from '../menubar/menubar.component';
import { CardComponent } from '../components/card/card.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PaginationComponent,
    FilterbuttonComponent,
    HeaderComponent,
    MenubarComponent,
    CardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cards = data;
  pageResult = this.cards;
  currentPage = 1;
  page_size = 5;

  constructor(private http: HttpClient) {
    console.log(data);
  }

  addItem(pageNum: number) {
    this.pageResult = this.paginate(pageNum);
  }
  onFilterSelect($event: any) {
    console.log($event);
    if($event.category === "all"){
      this.pageResult = this.cards;
    } else{
      this.pageResult = this.cards.filter(
        ({ category }) => category === $event.category
      );
    }
    
  }

  paginate(page_number: number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return this.cards.slice(
      (page_number - 1) * this.page_size,
      page_number * this.page_size
    );
  }
}
