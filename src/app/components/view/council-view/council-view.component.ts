import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-council-view',
  templateUrl: './council-view.component.html',
  styleUrls: ['./council-view.component.css']
})
export class CouncilViewComponent implements OnInit {
  counncilMember: any[];

  constructor(private view: ViewService) { }

  getCouncilMember() {
    this.view.getCouncilMember()
    .subscribe(data => {
      this.counncilMember = data;
    });
  }

  ngOnInit(): void {
    this.getCouncilMember();

    $("#showModal").click(function() {
      $(".council-member").addClass("is-active");  
    });
    
    $(".delete").click(function() {
       $(".modal").removeClass("is-active");
    });
  }

}
