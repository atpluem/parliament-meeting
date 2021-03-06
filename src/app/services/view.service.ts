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

  getConference(): Observable<any> {
    return this.httpClient.get<any>(
      this.baseUrl + "view/conference.php"
    );
  }

  getCouncilMember(): Observable<any> {
    return this.httpClient.get<any>(
      this.baseUrl + "view/council-member.php"
    );
  }

  getPartyMember(): Observable<any> {
    return this.httpClient.get<any>(
      this.baseUrl + "view/party-member.php"
    );
  }

  getMinistryMember(): Observable<any> {
    return this.httpClient.get<any>(
      this.baseUrl + "view/ministry-member.php"
    );
  }

  deleteCouncilMember(username) {
    return this.httpClient.get<any>(
      this.baseUrl + 'delete/del-council-member.php?' + 'username=' + username
    );
  }
}
