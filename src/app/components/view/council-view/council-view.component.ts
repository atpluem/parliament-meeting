import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-council-view',
  templateUrl: './council-view.component.html',
  styleUrls: ['./council-view.component.css']
})
export class CouncilViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#showModal").click(function() {
      $(".modal").addClass("is-active");  
    });
    
    $(".delete").click(function() {
       $(".modal").removeClass("is-active");
    });
  }

}
