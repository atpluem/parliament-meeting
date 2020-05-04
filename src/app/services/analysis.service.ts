import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgeInteval } from '../classes/ageinterval'

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  redirectUrl: string;
  baseUrl: string = 'https://parliament-meeting-api.herokuapp.com/';

  constructor(private httpClient: HttpClient) { }

  public getAgeInterval(): Observable<AgeInteval[]> {
    return this.httpClient.get<AgeInteval[]>(
      this.baseUrl + "Analysis_Report/Query07.php"
    );
  }
}
