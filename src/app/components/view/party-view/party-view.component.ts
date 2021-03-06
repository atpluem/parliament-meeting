import { Component, OnInit, Input } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-party-view',
  templateUrl: './party-view.component.html',
  styleUrls: ['./party-view.component.css']
})
export class PartyViewComponent implements OnInit {
  @Input() userrole = '';
  partyMember: any;

  constructor(private view: ViewService) { }

  getPartyMember() {
    this.view.getPartyMember()
    .subscribe(data => {
      this.partyMember = data;
      console.log(this.partyMember);
    });
  }

  ngOnInit(): void {
    this.getPartyMember();

    $("#showModalParty").click(function() {
      $(".party").addClass("is-active");  
    });
    
    $(".delete").click(function() {
      $(".modal").removeClass("is-active");
   });
  }

}
