import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    // trigger('loginanimation',[
    //   state('small', style({ height : '0px' })),
    //   state('large', style({ height : '100px' })),
    //   transition('small <=> large', animate('400ms ease-in'))
    // ])
    trigger('coverAnimation',[
      transition('* => *', [
        query('assets/cover1',style({transform: 'translateY(-100%)'})),
        query('assets/cover1',stagger('600ms',[
          animate('900ms',style({ transform: 'translateY(0)' }))
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
