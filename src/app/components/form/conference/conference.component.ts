import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {
  conferenceForm: FormGroup;
  time = {hour: 0, minute: 0};
  constructor() { }

  ngOnInit(): void {
  }
}
