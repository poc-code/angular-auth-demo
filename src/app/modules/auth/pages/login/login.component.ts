import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reactiveForm: FormGroup;
  user = {} as SocialUser;
  isSignedin: boolean;  

  constructor(private fb: FormBuilder, private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isSignedin = (user != null);
      localStorage.setItem('token', this.user.idToken);
    });
  }

  googleSignin(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    debugger;
    localStorage.setItem('token', this.user.idToken);
    console.log(this.user);
  }

  logout(): void {
    this.socialAuthService.signOut();
  }

}
