import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { FilterbuttonComponent } from './filterbutton/filterbutton.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component:LoginComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component:HomeComponent},
  {path:'filterbutton',component:FilterbuttonComponent},
  { path: 'header', component:HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
