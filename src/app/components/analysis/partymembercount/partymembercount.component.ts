import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../../services/analysis.service';

@Component({
  selector: 'app-partymembercount',
  templateUrl: './partymembercount.component.html',
  styleUrls: ['./partymembercount.component.css']
})
export class PartymembercountComponent implements OnInit {
  partyMemberCount: any;
  typeChart: any;
  dataChart: any;
  optionsChart: any;

  constructor(private analysis: AnalysisService) { }

  getPartyMemberCount() {
    this.analysis.getPartyMemberCount()
    .subscribe(data => {
      this.partyMemberCount = data;
    });
  }

  ngOnInit(): void {
    this.getPartyMemberCount();
  }

}
