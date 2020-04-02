import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PoliticalParty } from '../classes/political.party';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoliticalpartyService {
  baseUrl = 'http://localhost/api';
  politicalPartys: PoliticalParty[];

  constructor(private http: HttpClient) { }

  getAll(): Observable<PoliticalParty[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        this.politicalPartys = res['data'];
        return this.politicalPartys;
      })
    );
  }
}
