import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    const token = localStorage.getItem('token'); //busca token no storage local do navegador
    const payload = atob(token.split('.')[1]); //decode payload to tokens
    const parsePayload = JSON.parse(payload); //convert payload into object

    return parsePayload.exp > Date.now() / 1000; //check if token is expired
  }
}
