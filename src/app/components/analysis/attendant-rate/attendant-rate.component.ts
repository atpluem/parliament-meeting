import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../../services/analysis.service';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-attendant-rate',
  templateUrl: './attendant-rate.component.html',
  styleUrls: ['./attendant-rate.component.css']
})
export class AttendantRateComponent implements OnInit {
  attRate: any;

  constructor(private analysis: AnalysisService) { }

  getAttendantRate() {
    this.analysis.getAttendant()
    .subscribe(data => {
      this.attRate = data;
    });
  }

  ngOnInit(): void {
    this.getAttendantRate();
  }

}
