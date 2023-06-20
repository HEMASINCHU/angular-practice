import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {

  // names=["hema","keerthi","Prassu"]

  students=[{name:"Hema",id:24,address:"Banglore"},
  {name:"Keerthi",id:89,address:"Hyderabad"},
  {name:"Prassu",id:24,address:"Mysore"},
  {name:"Sinchu",id:24,address:"Anantapur"},
  {name:"Parnika",id:24,address:"Chennai"},
  

]

  

 
  buttons = [
    { id: 1, text: 'Hyderabad', selected: false },
    { id: 2, text: 'Banglore', selected: false },
    { id: 3, text: 'Mysore', selected: false },
    { id: 4, text: 'Anantapur', selected: false },
    { id: 5, text: 'Chennai', selected: false },
  
    
  ];


  selectButton(button:any){
    this.buttons.forEach(b => b.selected = false);
    console.log(button.text)
    button.selected = true;
    this.searchTerm=button.text
    
  }

  // Adults(students: any[]): any[] {
  //   return students.filter(p => p.name.length >5);
  // }
  
  
  searchTerm!: string;

  filterData(data: any[]): any[] {
    if (!this.searchTerm) {
      return data;
    }
    
    return data.filter(student => {
      return student.address.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
  
}

