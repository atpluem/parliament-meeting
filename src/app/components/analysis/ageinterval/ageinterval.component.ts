import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../../services/analysis.service';

@Component({
  selector: 'app-ageinterval',
  templateUrl: './ageinterval.component.html',
  styleUrls: ['./ageinterval.component.css']
})
export class AgeintervalComponent implements OnInit {
  ageInterval: any;
  typeChart: any;
  dataChart: any;
  optionsChart: any;

  constructor(private analysis: AnalysisService) { }

  getAgeInterval() {
    this.analysis.getAgeInterval()
    .subscribe(data => {
      this.ageInterval = data;
      this.dataChart = {
        labels: ["<30", "31-40", "41-50", "51-60", ">60"],
        datasets: [
          {
            label: "My Stats Chart",
            data: [
              Number(data[0].Numbers),
              Number(data[1].Numbers),
              Number(data[2].Numbers),
              Number(data[3].Numbers),
              Number(data[4].Numbers)
            ],
            backgroundColor : ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12']
          }
        ]
      };  
    });
  }

  ngOnInit(): void {
    this.getAgeInterval();
    this.typeChart = 'pie';
    this.optionsChart = {
      responsive: true,
      maintainAspectRatio: false
    };
  }

}
