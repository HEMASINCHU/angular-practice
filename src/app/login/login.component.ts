import { CommonModule } from '@angular/common';
import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router:Router){}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Perform login logic here
      console.log(this.loginForm.value);
    }

  }
  navigateToHome(){
    this.router.navigate(['/home'])
  }
  
}
