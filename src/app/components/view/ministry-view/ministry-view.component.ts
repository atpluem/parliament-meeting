import { Component, OnInit, Input } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-ministry-view',
  templateUrl: './ministry-view.component.html',
  styleUrls: ['./ministry-view.component.css']
})
export class MinistryViewComponent implements OnInit {
  @Input() userrole = '';
  ministryMember: any;

  constructor(private view: ViewService) { }

  getMinistruMember() {
    this.view.getMinistryMember()
      .subscribe(data => {
        this.ministryMember = data;
      });
  }

  ngOnInit(): void {
    this.getMinistruMember();

    $("#showModalMinistry").click(function () {
      $(".ministry-member").addClass("is-active");
    });

    $(".delete").click(function () {
      $(".modal").removeClass("is-active");
    });
  }

}
