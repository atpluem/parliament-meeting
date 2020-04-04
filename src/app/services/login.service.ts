import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
// import { EventEmitter } from 'protractor';
// import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  redirectUrl: string;
  baseUrl: string = 'http://localhost/api';

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }

  public userlogin(username, password) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(map(Usermodule => {
        this.setToken(Usermodule[0].name);
        this.getLoggedInName.emit(true);
      }));
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn(){
    const usertoken = this.getToken();
    if(usertoken != null) {
      return true;
    }
    return false;
  }
}
