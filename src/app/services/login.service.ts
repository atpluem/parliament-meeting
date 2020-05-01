import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Usermodule } from '../classes/usermodule';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  redirectUrl: string;
  baseUrl: string = 'https://parliament-meeting-api.herokuapp.com/';

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }

  public userlogin(username, password) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(map(Usermodule => {
        this.setToken(Usermodule[0].name);
        this.getLoggedInName.emit(true);
      }));
  }

  public getUserDetail(): Observable<Usermodule[]> {
    return this.httpClient.get<Usermodule[]>(
      this.baseUrl + '/getuser.php?' + 'username=' + this.getUser()
    );
  }

  setUser(user: string) {
    localStorage.setItem('user', user);
  }
  getUser() {
    return localStorage.getItem('user');
  }

  // Token
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
