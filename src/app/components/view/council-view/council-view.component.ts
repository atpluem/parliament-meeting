import { Component, OnInit, Input } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-council-view',
  templateUrl: './council-view.component.html',
  styleUrls: ['./council-view.component.css']
})
export class CouncilViewComponent implements OnInit {
  @Input() userrole = '';
  counncilMember: any[];

  constructor(private view: ViewService) { }

  getCouncilMember() {
    this.view.getCouncilMember()
    .subscribe(data => {
      this.counncilMember = data;
    });
  }

  deleteCouncil(personalID) {
    this.view.deleteCouncilMember(personalID)
    .subscribe(data => {
      console.log("Record deleted successfully");
      
    });
  }

  ngOnInit(): void {
    this.getCouncilMember();

    $("#showModalCouncil").click(function() {
      $(".council-member").addClass("is-active");  
    });
    
    $(".delete").click(function() {
      $(".modal").removeClass("is-active");
    });
  }

}
