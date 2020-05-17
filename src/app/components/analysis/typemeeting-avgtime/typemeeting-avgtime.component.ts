import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../../services/analysis.service';

@Component({
  selector: 'app-typemeeting-avgtime',
  templateUrl: './typemeeting-avgtime.component.html',
  styleUrls: ['./typemeeting-avgtime.component.css']
})
export class TypemeetingAvgtimeComponent implements OnInit {
  AVGTimeMeeting: any[];

  constructor(private analysis: AnalysisService) { }

  getAverageTimeOfTypeMeet() {
    this.analysis.getAverageTimeOfTypeMeet().subscribe(
      data => {
        this.AVGTimeMeeting = data;
      }
    )
  }

  ngOnInit(): void {
    this.getAverageTimeOfTypeMeet();
  }

}
