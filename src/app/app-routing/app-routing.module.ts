import { PageNotFoundComponent } from './../pages/page-not-found/page-not-found.component';
import { HomeComponent } from './../pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth', loadChildren: () => import('src/app/modules/auth/auth.module')
    .then(m => m.AuthModule)},
  { path: 'user' , loadChildren: () => import('src/app/modules/user/user.module')
    .then(m => m.UserModule), canActivate: [AuthGuard]}, //visit user only authenticated
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
