import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-argument',
  templateUrl: './argument.component.html',
  styleUrls: ['./argument.component.css']

})

export class ArgumentComponent implements OnInit {

  constructor(public http: HttpClient) { }

  public resultspersonalID: any;
  public resultssubtopic: any;
  ngOnInit(): void {
    //personalID
    this.http.get('https://parliament-meeting-api.herokuapp.com/form/GetAPIcouncilmember.php').subscribe(
      data => {
        this.resultspersonalID = data;
        console.log(this.resultspersonalID);
      },
      error => console.log(error)
    );

    this.http.get('https://parliament-meeting-api.herokuapp.com/form/GetAPIsubtopic.php').subscribe(
      data => {
        this.resultssubtopic = data;
        console.log(this.resultssubtopic);
      },
      error => console.log(error)
    );
  }
  form = new FormGroup({
    conferenceID: new FormControl('', [Validators.required]),
    subtopicname: new FormControl('', [Validators.required]),
    argumentatorID: new FormControl('', [Validators.required]),
    starttime: new FormControl('', [Validators.required]),
    starttimemin: new FormControl('', [Validators.required]),
    starttimesec: new FormControl('', [Validators.required]),
    endtime: new FormControl('',),
    endtimemin: new FormControl(''),
    endtimesec: new FormControl(''),
  })

  get conferenceID() { return this.form.get('conferenceID') }
  get subtopicname() { return this.form.get('subtopicname') }
  get argumentatorID() { return this.form.get('argumentatorID') }
  get starttime() { return this.form.get('starttime') }
  get starttimemin() { return this.form.get('starttimemin') }
  get starttimesec() { return this.form.get('starttimesec') }
  get endtime() { return this.form.get('endtime') }
  get endtimemin() { return this.form.get('endtimemin') }
  get endtimesec() { return this.form.get('endtimesec') }

  url = "https://bulma.io/images/placeholders/256x256.png"
  imageSelected: any;
  onOptionsSelected(e) {
    this.imageSelected = this.argumentatorID.value;
    var output = [];
    //console.log(this.argumentatorID.value['MemberPicture']);
    this.imageSelected = "data:image/jpg;base64," + this.argumentatorID.value['MemberPicture'];
    if (this.argumentatorID.value['MemberPicture'] === null) {
      this.url = "https://bulma.io/images/placeholders/256x256.png";
    } else {
      this.url = this.imageSelected;
    }
    //console.log(this.imageSelected);

  }
  resultsSubtopicname: any;
  onOptionsSelectedConference(e) {
    var output = [];
    //this.resultsSubtopicname = this.conferenceID.value;
    this.resultssubtopic.forEach(element => {
      if (element["ConferenceID"] == this.conferenceID.value['ConferenceID']) {
        output.push(element);
      }
    })
    this.resultsSubtopicname = output;
    //console.log(output);
  }
  url2 = "https://bulma.io/images/placeholders/256x256.png"
  onOptionsSelectedSubtopicname(e) {
    var output = [];
    console.log(this.subtopicname.value["SpeakerID"]);
    this.resultspersonalID.forEach(element => {
      if (element["PersonalID"] == this.subtopicname.value["SpeakerID"]) {
        output.push(element["MemberPicture"]);
      }
    })
    console.log(output);
    if (output[0] == null) {
      this.url2 = "https://bulma.io/images/placeholders/256x256.png";
    } else {
      this.url2 = "data:image/jpg;base64," + output;
    }
    //console.log(this.url2); 
    //this.imageSelected2 = this.imp2.value["MemberPicture"];
  }


  timeoutput: any;
  onOptionsSelectedStarttime(e) {
    var starttime: any;
    var endtime: any;
    starttime = this.starttime.value + ":" + this.starttimemin.value + ":" + this.starttimesec.value;
    endtime = this.endtime.value + ":" + this.endtimemin.value + ":" + this.endtimesec.value;
    var start = moment.utc(starttime, "HH:mm:ss");
    var end = moment.utc(endtime, "HH:mm:ss");
    // account for crossing over to midnight the next day
    if (end.isBefore(start)) end.add(1, 'day');

    // calculate the duration
    var d = moment.duration(end.diff(start));

    // subtract the lunch break
    d.subtract(30, 'minutes');
    console.log(starttime);
    console.log(endtime);
    // format a string result
    this.timeoutput = moment.utc(+d).format('HH:mm:ss');
    //console.log(this.timeoutput);
  }

  //SUBMIT
  successfulregister: boolean = false;
  failregister: boolean = false;

  onSubmit() {
    let headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
    let jsonform = JSON.parse(JSON.stringify(this.form.getRawValue()));
    console.log(jsonform);
    this.http.post('https://parliament-meeting-api.herokuapp.com/form/argumentForm.php', jsonform, { responseType: "text", headers: headers })
      .subscribe(
        data => {
          console.log("success!", data);
          this.form.reset();
          this.url = "https://bulma.io/images/placeholders/256x256.png";
          this.url2 = "https://bulma.io/images/placeholders/256x256.png";
          this.failregister = false;
          this.successfulregister = !this.successfulregister;
        },
        error => {
          console.error("couldn't post because", error);
          this.successfulregister = false;
          this.failregister = !this.failregister;
        }
      )
  }



}




