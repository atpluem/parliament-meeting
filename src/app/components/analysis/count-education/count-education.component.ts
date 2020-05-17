import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../../services/analysis.service';

@Component({
  selector: 'app-count-education',
  templateUrl: './count-education.component.html',
  styleUrls: ['./count-education.component.css']
})
export class CountEducationComponent implements OnInit {
  CountEducation: any[];

  constructor(private analysis: AnalysisService) { }

  getCountOfEducationDegree() {
    this.analysis.getCountOfEducationDegree().subscribe (
      data => {
        this.CountEducation = data;
      }
    );
  }

  ngOnInit(): void {
    this.getCountOfEducationDegree();
  }

}
