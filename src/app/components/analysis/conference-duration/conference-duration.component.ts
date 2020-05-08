import { Component, OnInit } from '@angular/core';
import { AnalysisService } from 'src/app/services/analysis.service';

@Component({
  selector: 'app-conference-duration',
  templateUrl: './conference-duration.component.html',
  styleUrls: ['./conference-duration.component.css']
})
export class ConferenceDurationComponent implements OnInit {
  conDuration: any[];

  constructor(private analysis: AnalysisService) { }

  getConferenceDuration() {
    this.analysis.getConferenceDuration()
    .subscribe(data => {
      this.conDuration = data;
    });
  }

  ngOnInit(): void {
    this.getConferenceDuration();
  }

}
