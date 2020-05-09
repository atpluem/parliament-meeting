import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  redirectUrl: string;
  baseUrl: string = 'https://parliament-meeting-api.herokuapp.com/';

  constructor(private httpClient: HttpClient) { }

  getCouncilMember(): Observable<any> {
    return this.httpClient.get<any>(
      this.baseUrl + "view/council-member.php"
    );
  }
}
