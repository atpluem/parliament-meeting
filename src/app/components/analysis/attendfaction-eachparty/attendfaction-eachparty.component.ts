import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../../services/analysis.service';

@Component({
  selector: 'app-attendfaction-eachparty',
  templateUrl: './attendfaction-eachparty.component.html',
  styleUrls: ['./attendfaction-eachparty.component.css']
})
export class AttendfactionEachpartyComponent implements OnInit {
  attendFaction: any[];

  constructor(private analysis: AnalysisService) { }

  getAttendOfAnyParty() {
    this.analysis.getAttendOfAnyParty().subscribe (
      data => {
        this.attendFaction = data;
      }
    );
  }

  ngOnInit(): void {
    this.getAttendOfAnyParty();
  }

}
