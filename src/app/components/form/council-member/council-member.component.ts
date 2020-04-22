import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-council-member',
  templateUrl: './council-member.component.html',
  styleUrls: ['./council-member.component.css']
})
export class CouncilMemberComponent implements OnInit {
  councilMemberForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
}
