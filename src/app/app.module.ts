import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './components/card/card.component';
import {  HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ButtonComponent } from './button/button.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    MenuComponent,
    HomeComponent,
    CardComponent,
    HeaderComponent,
    MenubarComponent,
    ButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginComponent,
    SignupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
