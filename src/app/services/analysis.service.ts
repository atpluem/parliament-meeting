import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  redirectUrl: string;
  baseUrl: string = 'https://parliament-meeting-api.herokuapp.com/';

  constructor(private httpClient: HttpClient) { }

  public getAgeInterval(): Observable<any> {
    return this.httpClient.get<any>(
      this.baseUrl + "Analysis_Report/Query07.php"
    );
  }

  public getAttendant(): Observable<any>{
    return this.httpClient.get<any>(
      this.baseUrl + "Analysis_Report/Query05.php"
    );
  }

  public getPartyMemberCount(): Observable<any> {
    return this.httpClient.get<any>(
      this.baseUrl + "Analysis_Report/Query04.php"
    );
  }
}
