import { Component, OnInit } from '@angular/core';
import { AnalysisService } from 'src/app/services/analysis.service';

@Component({
  selector: 'app-topargrank',
  templateUrl: './topargrank.component.html',
  styleUrls: ['./topargrank.component.css']
})
export class TopargrankComponent implements OnInit {
  topArgRank: any[];

  constructor(private analysis: AnalysisService) { }

  getTopArgumentRank() {
    this.analysis.getTopArgumentRank()
    .subscribe(data => {
      this.topArgRank = data;
    });
  }
  
  ngOnInit(): void {
    this.getTopArgumentRank();
  }

}
