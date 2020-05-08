import { Component, OnInit } from '@angular/core';
import { AnalysisService } from 'src/app/services/analysis.service';

@Component({
  selector: 'app-costperbuilding',
  templateUrl: './costperbuilding.component.html',
  styleUrls: ['./costperbuilding.component.css']
})
export class CostperbuildingComponent implements OnInit {
  costPerBuilding: any;

  constructor(private analysis: AnalysisService) { }

  getCostPerBuilding() {
    this.analysis.getCostPerBuilding()
    .subscribe(data => {
      this.costPerBuilding = data;
    });
  }

  ngOnInit(): void {
    this.getCostPerBuilding();
  }

}
