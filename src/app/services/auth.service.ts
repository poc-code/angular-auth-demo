import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    const token = localStorage.getItem('token'); //busca token no storage local do navegador
    const payload = atob(token.split('.')[1])
  }
}
