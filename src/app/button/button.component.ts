import { Component } from '@angular/core';
import { PRIMARY_OUTLET } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {


 
  photos:any;
  constructor(private api:ApiService){
   console.log( this.api.sayhello())
  
   this.api.getPhotoList().subscribe((result)=>{
   this.photos=result;
   console.log(result)
  })
  }
  array1: string[] = ['Item 1A', 'Item 1B', 'Item 1C'];
  array2: string[] = ['Item 2A', 'Item 2B', 'Item 2C'];
  array3: string[] = ['Item 3A', 'Item 3B', 'Item 3C'];
  array4: string[] = ['Item 4A', 'Item 4B', 'Item 4C'];
  array5: string[] = ['Item 5A', 'Item 5B', 'Item 5C'];

  buttons =["Button 1","Button 2","Button 3","Button 4","Button 5"]

  activeButton: number | null = null;

  showArray(buttonNumber: number) {
    this.activeButton = buttonNumber;
  }
}
