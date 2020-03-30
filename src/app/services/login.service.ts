import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLogged = false;

  constructor() { }

  login() {
    this.isLogged = true;
  }

  logOut() {
    this.isLogged = false;
  }

  getStatus() {
    return this.isLogged;
  }
}
