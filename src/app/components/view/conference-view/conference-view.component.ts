import { Component, OnInit, Input } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-conference-view',
  templateUrl: './conference-view.component.html',
  styleUrls: ['./conference-view.component.css']
})
export class ConferenceViewComponent implements OnInit {
  @Input() userrole = '';
  conference: any;

  constructor(private view: ViewService) { }

  getConference() {
    this.view.getConference()
    .subscribe(data => {
      this.conference = data;
    });
  }

  ngOnInit(): void {
    this.getConference();

    $("#showModalConference").click(function() {
      $(".conference").addClass("is-active");  
    });

    $("#showModalArgument").click(function() {
      $(".argument").addClass("is-active");  
    });

    $("#showModalAttendees").click(function() {
      $(".attendees").addClass("is-active");  
    });

    $("#showModalCost").click(function() {
      $(".cost").addClass("is-active");  
    });
    
    $("#showModalBuilding").click(function() {
      $(".building").addClass("is-active");  
    });

    $(".delete").click(function() {
       $(".modal").removeClass("is-active");
    });
  }

}
