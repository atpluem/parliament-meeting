import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent implements OnInit {
  councilMemberForm: FormGroup;
  conferenceDetail: any;
  costsType: any;
  councilMember: any; 

  check: string;
  checkfail: string;
  successfulregister: boolean = false;
  failregister: boolean = false;

  form = new FormGroup({
    billingId: new FormControl('', Validators.required),
    conferenceId: new FormControl('', Validators.required),
    costTypeId: new FormControl('', Validators.required),
    costValue: new FormControl('', Validators.required),
    receiptName: new FormControl('', Validators.required),
    receiptApproveId: new FormControl('', Validators.required) 
  });

  get billingId() { return this.form.get('billingId') }
  get conferenceId() { return this.form.get('conferenceId') }
  get costTypeId() { return this.form.get('costTypeId') }
  get costValue() { return this.form.get('costValue') }
  get receiptName() { return this.form.get('receiptName') }
  get receiptApproveId() { return this.form.get('receiptApproveId') }

  constructor(public http: HttpClient, private fb: FormBuilder) { }

  getConferenceDetail() {
    this.http.get('https://parliament-meeting-api.herokuapp.com/form/GetAPIcouncilconference.php')
    .subscribe(data => {
      this.conferenceDetail = data;
    });
    error => console.log(error);
  }

  getCostsType() {
    this.http.get('https://parliament-meeting-api.herokuapp.com/form/GetAPIcoststype.php')
    .subscribe(data => {
      this.costsType = data;
    });
    error => console.log(error);
  }

  getCouncilMember() {
    this.http.get('https://parliament-meeting-api.herokuapp.com/form/GetAPIcouncilmember.php')
    .subscribe(data => {
      this.councilMember = data;
    });
    error => console.log(error);
  }

  onSubmit() {
    const Form = new FormData();
    
    let headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
    let jsonform = JSON.parse(JSON.stringify(this.form.getRawValue()));
    console.log(jsonform);

    this.http.post('https://parliament-meeting-api.herokuapp.com/form/meetingcostForm.php', { jsonform } , { responseType: "text", headers: headers })
    .subscribe(data => {
      console.log("success!", this.check = data);
      this.form.reset();
      this.successfulregister = !this.successfulregister;
    },
    error => {
      console.error("couldn't post because ", this.checkfail = error)
      this.failregister = !this.failregister;
    });
    if (this.check !== "" && this.checkfail === "") {
      this.successfulregister = !this.successfulregister;
    }
  }

  ngOnInit(): void {
    this.getConferenceDetail();
    this.getCostsType();
    this.getCouncilMember();
  }

}
