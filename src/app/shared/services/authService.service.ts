import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  isLoggedIn() {
    return localStorage.getItem('logged');
  }

  setLogged() {
    localStorage.setItem('logged', `true`);
  }

  setLogout() {
    localStorage.setItem('logged', `false`);
  }

}
