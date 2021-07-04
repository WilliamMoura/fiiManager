import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginIndexComponent } from './login-index/login-index.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    LoginIndexComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    LoginIndexComponent
  ]
})
export class LoginModule { }
