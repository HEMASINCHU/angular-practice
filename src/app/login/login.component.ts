import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string='';
  password: string='';
  constructor(private router: Router) { }


  onSubmit() {
    console.log('Login submitted');
    console.log(this.email, this.password);
  }
  navigateTomain() {
    this.router.navigate(['/home']);
  }
}
