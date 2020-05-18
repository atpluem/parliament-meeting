import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {
  conferenceForm: FormGroup;
  time = { hour: 0, minute: 0 };
  constructor(public http: HttpClient) { }


  //validator form
  form = new FormGroup({
    topicname: new FormControl('', [Validators.required]),
    chairmanID: new FormControl('',),
    conferencetype: new FormControl('',),
    starttime: new FormControl('',),
    starttimemin: new FormControl('',),
    endtime: new FormControl('',),
    endtimemin: new FormControl('',),
    dateconference: new FormControl('',),
    buildingname: new FormControl('',),
    roomnumber: new FormControl('',),
    subtopicname: new FormControl('',),
    speakerID: new FormControl('',),
    acceptor: new FormControl('',),
    rejector: new FormControl('',),
    nonvoter: new FormControl('',),
    substarttime: new FormControl('',),
    substarttimemin: new FormControl('',),
    subendtime: new FormControl('',),
    subendtimemin: new FormControl('',),
    datesubtopic: new FormControl('',),
  })

  get topicname() { return this.form.get('topicname') }
  get chairmanID() { return this.form.get('chairmanID') }
  get conferencetype() { return this.form.get('conferencetype') }
  get starttime() { return this.form.get('starttime') }
  get starttimemin() { return this.form.get('starttimemin') }
  get endtime() { return this.form.get('endtime') }
  get endtimemin() { return this.form.get('endtimemin') }
  get dateconference() { return this.form.get('dateconference') }
  get buildingname() { return this.form.get('buildingname') }
  get roomnumber() { return this.form.get('roomnumber') }
  get subtopicname() { return this.form.get('subtopicname') }
  get speakerID() { return this.form.get('speakerID') }
  get acceptor() { return this.form.get('acceptor') }
  get rejector() { return this.form.get('rejector') }
  get nonvoter() { return this.form.get('nonvoter') }
  get substarttime() { return this.form.get('substarttime') }
  get substarttimemin() { return this.form.get('substarttimemin') }
  get subendtime() { return this.form.get('subendtime') }
  get subendtimemin() { return this.form.get('subendtimemin') }
  get datesubtopic() { return this.form.get('datesubtopic') }

  public resultsbuildingSelected: any;
  public resultsbuildingtype: [];
  url = "https://bulma.io/images/placeholders/256x256.png";
  onOptionsSelected(e) {
    this.resultsbuildingSelected = [this.buildingname.value];
    var output = [];
    //console.log(this.buildingname.value['BuildingPicture']);
    this.resultsroom.forEach(element => {
      if (element['BuildingName'] === this.buildingname.value['BuildingName']) {
        output.push(element);
      }
    })
    this.resultsroom2 = output;
    console.log(this.resultsroom2);
    if(this.buildingname.value['BuildingPicture'] != null){
      this.url = "data:image/jpg;base64," + this.buildingname.value['BuildingPicture'];
    }
    
    
  }

  //numonly
  numberOnly(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  //SUBMIT
  successfulregister: boolean = false;
  failregister: boolean = false;
  onSubmit() {
    let headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
    let jsonform = JSON.parse(JSON.stringify(this.form.getRawValue()));
    console.log(jsonform)
    this.http.post('https://parliament-meeting-api.herokuapp.com/form/ConferenceForm.php', jsonform, { responseType: "text", headers: headers })
      .subscribe(
        data => {
          console.log("success!", data);
          //this.form.reset();
          this.url = "https://bulma.io/images/placeholders/256x256.png";
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

  public selected: any;
  public resultsbuilding: any;
  public resultsconferencetype: any;
  public resultsroom: any;
  public resultsroom2: any;
  public resultspersonalID: any;
  ngOnInit() {
    this.http.get('https://parliament-meeting-api.herokuapp.com/form/GetAPIbuilding.php').subscribe(
      data => {
        this.resultsbuilding = data;
        console.log(this.resultsbuilding);
      },
      error => console.log(error)
    );

    //conferencetype
    this.http.get('https://parliament-meeting-api.herokuapp.com/form/GetAPIconferencetype.php').subscribe(
      data => {
        this.resultsconferencetype = data;
        console.log(this.resultsconferencetype);
      },
      error => console.log(error)
    );

    //room
    this.http.get('https://parliament-meeting-api.herokuapp.com/form/GetAPIroom.php').subscribe(
      data => {
        this.resultsroom = data;
        console.log(this.resultsroom);
      },
      error => console.log(error)
    );

    //personalID
    this.http.get('https://parliament-meeting-api.herokuapp.com/form/GetAPIcouncilmember.php').subscribe(
      data => {
        this.resultspersonalID = data;
        console.log(this.resultspersonalID);
      },
      error => console.log(error)
    );

    $("#tosubconference").click(function () {
      $("#subconferencemodal").addClass("is-active");
    });

    $(".savesubconference").click(function () {
      $("#subconferencemodal").removeClass("is-active");
    })
  }

  form2 = new FormGroup({
    
  })


}
