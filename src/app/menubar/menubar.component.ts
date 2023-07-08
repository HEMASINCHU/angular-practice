import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {
  constructor(private router:Router){}

  

}
