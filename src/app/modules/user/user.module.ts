import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './pages/show/show.component';
import { EditComponent } from './pages/edit/edit.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { UserRoutingModule } from './user-routing/user-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ShowComponent,
    EditComponent,
    UserHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule
  ]
})
export class UserModule { }
