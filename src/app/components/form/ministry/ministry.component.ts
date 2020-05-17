import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ministry',
  templateUrl: './ministry.component.html',
  styleUrls: ['./ministry.component.css']
})
export class MinistryComponent implements OnInit {

  constructor(public http: HttpClient) { }
  numberOnly(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode != 47) {
      return false;
    }
    return true;
  }
 


  form2 = new FormGroup({
    
  })

  form = new FormGroup({
    ministryname: new FormControl('', [Validators.required]),
    ministryID: new FormControl(''),
    ministrydetail: new FormControl(''),
    buildingname: new FormControl('',),
    buildingnumber: new FormControl(''),
    buildingstreet: new FormControl(''),
    zipcode: new FormControl(''),
    subdistrict: new FormControl(''),
    buildingdetail: new FormControl(''),
    image: new FormControl(''),
    image2: new FormControl(''),
    subministryname: new FormControl(''),
    subministrydetail: new FormControl(''),
  })
  
  get ministryname() { return this.form.get('ministryname') }
  get ministryID() { return this.form.get('ministryID') }
  get ministrydetail() { return this.form.get('ministrydetail') }
  get buildingname() { return this.form.get('buildingname') }
  get buildingnumber() { return this.form.get('buildingnumber') }
  
  get buildingstreet() { return this.form.get('buildingstreet') }
  get zipcode() { return this.form.get('zipcode') }
  get subdistrict() { return this.form.get('subdistrict') }
  get buildingdetail() { return this.form.get('buildingdetail') }
  get subministryname() { return this.form.get('buildingdetail') }
  get subministrydetail() { return this.form.get('subministrydetail') }
  
  url = "https://bulma.io/images/placeholders/256x256.png";
  url2 = "https://bulma.io/images/placeholders/256x256.png";
  onselectFile2(e) {
    //preview name of political party
    if (e.target.files.length > 0) {
      var infoArea2 = document.getElementById('file-name2');
      infoArea2.textContent = e.target.files[0].name;
      console.log(e.target.files[0].name);
    }
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url2 = event.target.result;
        // console.log(event.target.result);
      }
    }
  }
  onselectFile(e) {
    //preview name of political party
    if (e.target.files.length > 0) {
      var infoArea = document.getElementById('file-name');
      infoArea.textContent = e.target.files[0].name;
      console.log(e.target.files[0].name);
    }
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        // console.log(event.target.result);
      }
    }
  }

  failregister:boolean = false;
  successfulregister:boolean = false;
  onSubmit() {
    let headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
    let jsonform = JSON.parse(JSON.stringify(this.form.getRawValue()));
    //console.log([jsonform, this.url])
    this.http.post('https://parliament-meeting-api.herokuapp.com/form/ministryForm.php', [jsonform,this.url,this.url2], { responseType: "text", headers: headers })
      .subscribe(
        data => {
          console.log("success!", data);
          //this.form.reset();
          this.url = "https://bulma.io/images/placeholders/256x256.png";
          var infoArea = document.getElementById('file-name');
          infoArea.textContent = "No file selected";

          this.url2 = "https://bulma.io/images/placeholders/256x256.png";
          var infoArea2 = document.getElementById('file-name2');
          infoArea2.textContent = "No file selected";
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
  resultsareas: any;
  resultspersonalID: any;
  ngOnInit(): void {
    $("#clicktomodal").click(function () {
      $("#subministrymodal").addClass("is-active");
    });

    $("#delete").click(function () {
      $(".modal").removeClass("is-active");
    });

    this.http.get('https://parliament-meeting-api.herokuapp.com/form/GETAPIareas.php').subscribe(
      data => {
        this.resultsareas = data;
        console.log(this.resultsareas);
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
  }

}
