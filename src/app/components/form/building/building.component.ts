import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  constructor(public http: HttpClient) { }
  form2 = new FormGroup({
    
  })
  form = new FormGroup({
    buildingname: new FormControl('', [Validators.required]),
    buildingnumber: new FormControl(''),
    buildingtype: new FormControl(''),
    buildingstreet: new FormControl(''),
    zipcode: new FormControl(''),
    subdistrict: new FormControl(''),
    buildingdetail: new FormControl(''),
    room1: new FormControl(''),
    room2: new FormControl(''),
    room3: new FormControl(''),
    room4: new FormControl(''),
    room5: new FormControl(''),
    image: new FormControl(''),
  })
  get buildingname() { return this.form.get('buildingname') }
  get buildingnumber() { return this.form.get('buildingnumber') }
  get buildingtype() { return this.form.get('buildingtype') }
  get buildingstreet() { return this.form.get('buildingstreet') }
  get zipcode() { return this.form.get('zipcode') }
  get subdistrict() { return this.form.get('subdistrict') }
  get buildingdetail() { return this.form.get('buildingdetail') }
  get room1() { return this.form.get('room') }
  get room2() { return this.form.get('room2') }
  get room3() { return this.form.get('room3') }
  get room4() { return this.form.get('room4') }
  get room5() { return this.form.get('room5') }


  get image() { return this.form.get('image') }
  //numberonly
  numberOnly(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode != 47) {
      return false;
    }
    return true;
  }

  url = "https://bulma.io/images/placeholders/256x256.png"
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
  // http://localhost/imageUpload/GetAPIroom.php
  failregister:boolean = false;
  successfulregister:boolean = false;
  onSubmit() {
    let headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
    let jsonform = JSON.parse(JSON.stringify(this.form.getRawValue()));
    //console.log([jsonform, this.url])
    this.http.post('https://parliament-meeting-api.herokuapp.com/form/buildingForm.php', [jsonform,this.url], { responseType: "text", headers: headers })
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
  resultsareas: any;
  ngOnInit(): void {
    this.http.get('https://parliament-meeting-api.herokuapp.com/form/GETAPIareas.php').subscribe(
      data => {
        this.resultsareas = data;
        console.log(this.resultsareas);
      },
      error => console.log(error)
    );
    $("#clicktomodal").click(function () {
      $(".modal").addClass("is-active");
    });

    $("#delete").click(function () {
      $(".modal").removeClass("is-active");
    });
  }
}
  

