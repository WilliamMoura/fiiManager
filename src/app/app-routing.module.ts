import { FiisComponent } from './pages/fiis/fiis/fiis.component';
import { SignUpComponent } from './pages/login/sign-up/sign-up.component';
import { LoginIndexComponent } from './pages/login/login-index/login-index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginIndexComponent},
  {path: 'sign', component: SignUpComponent},
  {path: 'fiis', component: FiisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
