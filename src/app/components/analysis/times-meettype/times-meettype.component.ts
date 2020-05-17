import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../../services/analysis.service';

@Component({
  selector: 'app-times-meettype',
  templateUrl: './times-meettype.component.html',
  styleUrls: ['./times-meettype.component.css']
})
export class TimesMeettypeComponent implements OnInit {
  TimesTypeMeet: any[];

  constructor(private analysis: AnalysisService) { }

  getTimesOfTypeMeeting() {
    this.analysis.getTimesOfTypeMeeting().subscribe (
      data => {
        this.TimesTypeMeet = data;
      }
    );
  }

  ngOnInit(): void {
    this.getTimesOfTypeMeeting();
  }

}
