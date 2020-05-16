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

  public getCostPerBuilding(): Observable<any> {
    return this.httpClient.get<any>(
      this.baseUrl + "Analysis_Report/Query08.php"
    );
  }

  public getConferenceDuration(): Observable<any> {
    return this.httpClient.get<any>(
      this.baseUrl + "Analysis_Report/Query01.php"
    );
  }

  public getTopArgumentRank(): Observable<any> {
    return this.httpClient.get<any>(
      this.baseUrl + "Analysis_Report/Query09.php"
    );
  }

  public getAverageTimeOfTypeMeet(): Observable<any> {
    return this.httpClient.get<any> (
      this.baseUrl + "Analysis_Report/Query02.php"
    );
  }

  public getTimesOfTypeMeeting(): Observable<any> {
    return this.httpClient.get<any> (
      this.baseUrl + "Analysis_Report/Query03.php"
    );
  }

  public getTimesMeetingOfAnyBuilding(): Observable<any> {
    return this.httpClient.get<any> (
      this.baseUrl + "Analysis_Report/Query06.php"
    );
  }

  public getCountOfEducationDegree(): Observable<any> {
    return this.httpClient.get<any> (
      this.baseUrl + "Analysis_Report/Query10.php"
    );
  }

  public getAttendOfAnyParty(): Observable<any> {
    return this.httpClient.get<any> (
      this.baseUrl + "Analysis_Report/Query11.php"
    );
  }

  public getSubtopicRejectRate(): Observable<any> {
    return this.httpClient.get<any> (
      this.baseUrl + "Analysis_Report/Query12.php"
    );
  }
} 
