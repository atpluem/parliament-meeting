import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../../services/analysis.service';

@Component({
  selector: 'app-timesmeet-eachbuiling',
  templateUrl: './timesmeet-eachbuiling.component.html',
  styleUrls: ['./timesmeet-eachbuiling.component.css']
})
export class TimesmeetEachbuilingComponent implements OnInit {
  TimesMeetBuilding: any[];

  constructor(private analysis: AnalysisService) { }

  getTimesMeetOfEachBuilding() {
    this.analysis.getTimesMeetingOfAnyBuilding().subscribe (
      data => {
        this.TimesMeetBuilding = data;
        console.log(this.TimesMeetBuilding);
      }
    );
  }

  ngOnInit(): void {
    this.getTimesMeetOfEachBuilding();
  }

}
