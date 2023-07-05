import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  sayhello() {
    return "hello"
  }
  getstudents(){return [
    { name: 'Hema', id: 24, address: 'Banglore' },
    { name: 'Keerthi', id: 89, address: 'Hyderabad' },
    { name: 'Prassu', id: 24, address: 'Mysore' },
    { name: 'Sinchu', id: 24, address: 'Anantapur' },
    { name: 'Parnika', id: 24, address: 'Chennai' },
  
  ]
};
  getPhotoList(){
    return this.http.get("https://picsum.photos/v2/list?page=2&limit=5");
    
  }

}
