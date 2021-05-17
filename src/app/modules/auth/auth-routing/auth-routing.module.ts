import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { LogoutComponent } from '../pages/logout/logout.component';
import { AuthHomeComponent } from '../pages/auth-home/auth-home.component';

const routes : Routes = [
  { path: '', 
  component: AuthHomeComponent, 
  data: {title: 'Login'}, 
  children:[
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' }
  ]
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthRoutingModule { }
