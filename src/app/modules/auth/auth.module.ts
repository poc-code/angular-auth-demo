import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AuthHomeComponent } from './pages/auth-home/auth-home.component';
import { AuthRoutingModule } from './auth-routing/auth-routing.module';
import { RouterModule } from '@angular/router';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    AuthHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    { 
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '255430207826-n8ljvg9mrk0389pj7migdbd11qgr76rl.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
  }]
})
export class AuthModule { }
