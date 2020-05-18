import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';



@Component({
  selector: 'app-council-member',
  templateUrl: './council-member.component.html',
  styleUrls: ['./council-member.component.css']
})

export class CouncilMemberComponent implements OnInit {
  councilMemberForm: FormGroup;
  constructor(public http: HttpClient, private fb: FormBuilder) { }

  currentInput;
  check: string;
  checkfail: string;
  successfulregister: boolean = false;
  failregister: boolean = false;
  //preview image 
  url = "https://bulma.io/images/placeholders/256x256.png"
  onselectFile(e) {
    //preview name of file
    if (e.target.files.length > 0) {
      var infoArea = document.getElementById('file-name');
      infoArea.textContent = e.target.files[0].name;
      //console.log(e.target.files[0].name);
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



  //submitform

  onSubmit() {
    const Form = new FormData();
    //Form.append(jsonform,this.url);
    let headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
    let jsonform = JSON.parse(JSON.stringify(this.form.getRawValue()));
    let image = JSON.parse(JSON.stringify(this.url));
    console.log(jsonform);
    this.http.post('https://parliament-meeting-api.herokuapp.com/form/councilmemberForm.php', { jsonform, image }, { responseType: "text", headers: headers })
      .subscribe(
        data => {
          console.log("success!", this.check = data);
          this.form.reset();
          this.url = "https://bulma.io/images/placeholders/256x256.png";
          var infoArea = document.getElementById('file-name');
          infoArea.textContent = "No file selected";
          var successText = document.getElementById('successfulregister')
          this.failregister = false;
          this.successfulregister = !this.successfulregister;
        },
        error => {
          console.error("couldn't post because", this.checkfail = error)
          this.successfulregister = false;
          this.failregister = !this.failregister;
        }

      );
  }

  numberOnly(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  //form validation
  form = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(13)]),
    firstname: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    councilpos: new FormControl('', Validators.required),
    subministryname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    education: new FormControl('', Validators.required),
    partyname: new FormControl('', Validators.required),
    ministrypos: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    partyPos: new FormControl('', Validators.required),
  })

  get firstname() { return this.form.get('firstname') }
  get id() { return this.form.get('id') }
  get dob() { return this.form.get('dob') }
  get councilpos() { return this.form.get('councilpos') }
  get subministryname() { return this.form.get('subministryname') }
  get lastname() { return this.form.get('lastname') }
  get education() { return this.form.get('education') }
  get partyname() { return this.form.get('partyname') }
  get ministrypos() { return this.form.get('ministrypos') }
  get image() { return this.form.get('image') }
  get password() { return this.form.get('password') }
  get partyPos() { return this.form.get('partyPos') }




  public resultspartypos: any;
  public resultspartyname: any;
  public resultscouncilpos: any;
  public resultsministrypos:any;
  public resultssubministryname:any;
  ngOnInit() {
    this.http.get('https://parliament-meeting-api.herokuapp.com/form/councilmemberGetAPIpartypos.php').subscribe(
      data => {
      this.resultspartypos = data;
        console.log(this.resultspartypos);
      },
      error => console.log(error)
    );

    this.http.get('https://parliament-meeting-api.herokuapp.com/form/councilmemberGetAPIpartyname.php').subscribe(
      data => {
      this.resultspartyname = data;
        console.log(this.resultspartyname);
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

    this.http.get('https://parliament-meeting-api.herokuapp.com/form/councilmemberGetAPIministrypos.php').subscribe(
      data => {
      this.resultsministrypos = data;
        console.log(this.resultsministrypos);
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
    
  }

}
