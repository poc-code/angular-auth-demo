import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from '../pages/show/show.component';
import { EditComponent } from '../pages/edit/edit.component';
import { UserHomeComponent } from '../pages/user-home/user-home.component';

const routes: Routes = [
  { path: '', 
  component: UserHomeComponent ,
  data: { title: 'User'},
  children: [
    { path: 'show', component: ShowComponent },
    { path: 'edit',  component: EditComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
  ]
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserRoutingModule { }
