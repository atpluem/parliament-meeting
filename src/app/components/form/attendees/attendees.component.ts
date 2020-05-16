import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css']
})
export class AttendeesComponent implements OnInit {
  constructor(public http : HttpClient) { }
  
  attendees: FormGroup;
  conferenceData: any;

  check: string;
  checkfail: string;
  successregister: boolean = false;
  failregister:boolean = true;

  form = new FormGroup ({
    personalID : new FormControl('', [Validators.required]),
    conferenceID : new FormControl('', [Validators.required]),
    conferencedate : new FormControl('', [Validators.required]),
    starttime : new FormControl('',),
    starttimemin : new FormControl('',),
    endtime : new FormControl('',),
    endtimemin : new FormControl('',)
  });

  get personalID() {return this.form.get('personalID')}
  get conferenceID() {return this.form.get('conferenceID')}
  get conferencedate() {return this.form.get('conferencedate')}
  get starttime() {return this.form.get('starttime')}
  get starttimemin() {return this.form.get('starttimemin')}
  get endtime() {return this.form.get('endtime')}
  get endtimemin() {return this.form.get('endtimemin')}


  //Get data from conference table
  GetDataConference() {
    this.http.get('https://parliament-meeting-api.herokuapp.com/form/GetAPIcouncilconference.php').subscribe (
      data => {
        this.conferenceData = data;
      });
    error => console.log(error);
  }


  //Submit data to database
  onSubmit() {
    const From = new FormData();

    let headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
    let jsonform = JSON.parse(JSON.stringify(this.form.getRawValue()));
    console.log(jsonform);

    this.http.post('https://parliament-meeting-api.herokuapp.com/form/AttendeesForm.php', { jsonform }, { responseType: "text", headers: headers }).subscribe (
      data => {
        console.log("Success!", this.check = data);
        this.form.reset();
        this.successregister = !this.successregister;
      },
      error => {
        console.log("couldn't post because", this.check = error)
        this.failregister = !this.failregister;
      }
    );

    if (this.check !== "" && this.checkfail === "") {
      this.successregister = !this.successregister
    }

  }
  
  ngOnInit(): void {
    this.GetDataConference();
    console.log(this.conferenceData);
  }

}
