import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchText:any;
  constructor(private router: Router) { }
  onSearch(){
    const queryParams = {searchString: this.searchText}
    this.router.navigate(['/home'],{queryParams})
  }

}
