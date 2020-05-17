import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../../services/analysis.service';

@Component({
  selector: 'app-subtopic-rejectrate',
  templateUrl: './subtopic-rejectrate.component.html',
  styleUrls: ['./subtopic-rejectrate.component.css']
})
export class SubtopicRejectrateComponent implements OnInit {
  SubtopicReject: any[];

  constructor(private analysis: AnalysisService) { }

  getSubtopicRejectRate() {
    this.analysis.getSubtopicRejectRate().subscribe(
      data => {
        this.SubtopicReject = data;
      }
    );
  }

  ngOnInit(): void {
    this.getSubtopicRejectRate();
  }

}
