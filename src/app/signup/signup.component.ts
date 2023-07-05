import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  firstName: string='';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  gender: string = '';
  dob: string = '';
  password: string = '';
  constructor(private router: Router) { }

  onSubmit() {
    
    console.log('Form submitted');
    console.log(this.firstName, this.lastName, this.email, this.phoneNumber, this.gender, this.dob, this.password);
  }
  navigateToLogin(){
    this.router.navigate(['/login']);
  }



}
 