import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  partyForm: FormGroup;
  constructor(public http: HttpClient) { }
   //validator form
   form = new FormGroup({
    partyname: new FormControl('',[Validators.required]),
    image: new FormControl(''),
    founderID: new FormControl('',),
    leaderID: new FormControl('',),
    telephone: new FormControl('',[Validators.required]),
    founderdate: new FormControl('',[Validators.required]),
    buildingname: new FormControl('',),
    buildingnumber: new FormControl('',[Validators.required]),
    buildingtype: new FormControl('',),
    buildingstreet: new FormControl('',),
    zipcode: new FormControl('',[Validators.required]),
    image2: new FormControl(''),
    subdistrict: new FormControl('',[Validators.required]),
    buildingdetail: new FormControl('',),

    id: new FormControl(''),
    firstname: new FormControl(''),
    dob: new FormControl(''),
    councilpos: new FormControl(''),
    subministryname: new FormControl(''),
    lastname: new FormControl(''),
    education: new FormControl(''),
    ministrypos: new FormControl(''),
    password: new FormControl(''),
    partyPos: new FormControl(''),
   },)
   
   get partyname(){return this.form.get('partyname')}
   get image(){return this.form.get('image')}
   get founderID(){return this.form.get('founderID')}
   get telephone(){return this.form.get('telephone')}
   get founderdate(){return this.form.get('founderdate')}
   get buildingname(){return this.form.get('buildingname')}
   get buildingnumber(){return this.form.get('buildingnumber')}
   get buildingtype(){return this.form.get('buildingtype')}
   get buildingstreet(){return this.form.get('buildingstreet')}
   get zipcode(){return this.form.get('zipcode')}
   get image2(){return this.form.get('image2')}
   get leaderID(){return this.form.get('leaderID')}
   get buildingdetail(){return this.form.get('leaderID')}
   get subdistrict(){return this.form.get('subdistrict')}

   get firstname() { return this.form.get('firstname') }
   get id() { return this.form.get('id') }
   get dob() { return this.form.get('dob') }
   get councilpos() { return this.form.get('councilpos') }
   get subministryname() { return this.form.get('subministryname') }
   get lastname() { return this.form.get('lastname') }
   get education() { return this.form.get('education') }
   get ministrypos() { return this.form.get('ministrypos') }
   get password() { return this.form.get('password') }
   get partyPos() { return this.form.get('partyPos') }
   
 
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
  url2 = "https://bulma.io/images/placeholders/256x256.png"
  onselectFile2(e) {
    //preview name of building
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

  url3 = "https://bulma.io/images/placeholders/256x256.png"
  onselectFile3(e) {
    //preview name of building
    if (e.target.files.length > 0) {
      var infoArea3 = document.getElementById('file-name3');
      infoArea3.textContent = e.target.files[0].name;
      console.log(e.target.files[0].name);
    }
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url3 = event.target.result;
        // console.log(event.target.result);
      }
    }
  }


  //numberonly
  numberOnly(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  //numberonly
  numberOnlyBuilding(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode != 47) {
      return false;
    }
    return true;
  }
  //submit

  successfulregister: boolean = false;
  failregister: boolean = false;
  onSubmit() {
    const Form = new FormData();
    //Form.append(jsonform,this.url);
    let headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
    let jsonform = JSON.parse(JSON.stringify(this.form.getRawValue()));
    let image = JSON.parse(JSON.stringify(this.url));
    let image2 = JSON.parse(JSON.stringify(this.url2));
    let image3 = JSON.parse(JSON.stringify(this.url3));
    //console.log({jsonform,image,image2,image3});
    this.http.post('https://parliament-meeting-api.herokuapp.com/form/partyForm.php', { jsonform, image,image2,image3 }, { responseType: "text", headers: headers })
      .subscribe(
        data => {
          console.log("success!",data);
          this.form.reset();
          this.url = "https://bulma.io/images/placeholders/256x256.png";
          var infoArea = document.getElementById('file-name');
          infoArea.textContent = "No file selected";

          this.url2 = "https://bulma.io/images/placeholders/256x256.png";
          var infoArea2 = document.getElementById('file-name');
          infoArea2.textContent = "No file selected";

          var successText = document.getElementById('successfulregister')
          this.failregister = false;
         this.successfulregister = !this.successfulregister;
        },
        error => {
          console.error("couldn't post because",error)
          this.successfulregister = false;
         this.failregister = !this.failregister;
        }
      );
  }
  public resultspersonalID: any;
  public resultsareas: any;
  resultspartypos:any;
  resultscouncilpos:any;
  resultssubministryname:any;
  resultsministrypos:any;
  ngOnInit(): void {
    //personalID
    this.http.get('https://parliament-meeting-api.herokuapp.com/form/GetAPIcouncilmember.php').subscribe(
      data => {
        this.resultspersonalID = data;
        console.log(this.resultspersonalID);
      },
      error => console.log(error)
    );
    this.http.get('https://parliament-meeting-api.herokuapp.com/form/GetAPIareas.php').subscribe(
      data => {
        this.resultsareas = data;
        console.log(this.resultsareas);
      },
      error => console.log(error)
    );
    $("#tosubparty").click(function () {
      $("#subpartymodal").addClass("is-active");
    });

    $(".savesubparty").click(function () {
      $("#subpartymodal").removeClass("is-active");
    })

    this.http.get('https://parliament-meeting-api.herokuapp.com/form/councilmemberGetAPIpartypos.php').subscribe(
      data => {
      this.resultspartypos = data;
        console.log(this.resultspartypos);
      },
      error => console.log(error)
    );

    this.http.get('https://parliament-meeting-api.herokuapp.com/form/councilmemberGetAPIcouncilpos.php').subscribe(
      data => {
      this.resultscouncilpos = data;
        console.log(this.resultscouncilpos);
      },
      error => console.log(error)
    );

    this.http.get('https://parliament-meeting-api.herokuapp.com/form/councilmemberGetAPIsubministryname.php').subscribe(
      data => {
      this.resultssubministryname = data;
        console.log(this.resultssubministryname);
      },
      error => console.log(error)
    );
    this.http.get('https://parliament-meeting-api.herokuapp.com/form/councilmemberGetAPIministrypos.php').subscribe(
      data => {
      this.resultsministrypos = data;
        console.log(this.resultsministrypos);
      },
      error => console.log(error)
    );

  }
  form2 = new FormGroup({
    
  })

}
