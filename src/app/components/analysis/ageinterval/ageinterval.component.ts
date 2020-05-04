import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../../services/analysis.service';
import { AgeInteval } from '../../../classes/ageinterval';

@Component({
  selector: 'app-ageinterval',
  templateUrl: './ageinterval.component.html',
  styleUrls: ['./ageinterval.component.css']
})
export class AgeintervalComponent implements OnInit {

  typeChart: any;
  dataChart: any;
  optionsChart: any;

  ageInterval: AgeInteval[];

  constructor(private analysis: AnalysisService) { }

  getAgeInterval() {
    this.analysis.getAgeInterval()
    .subscribe(data => {
      this.ageInterval = data;
    });
  }

  ngOnInit(): void {
    this.getAgeInterval();
    this.typeChart = 'pie';
    this.dataChart = {
      labels: ["<30", "30-40"],
      datasets: [
        {
          label: "My Stats Chart",
          data: [50,60],
          backgroundColor: ['#1abc9c', '#3498db']
        }
      ]
    };
    this.optionsChart = {
      responsive: true,
      maintainAspectRatio: false
    };
  }

}
