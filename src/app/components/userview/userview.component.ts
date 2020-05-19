import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from '../../services/login.service'
import { Usermodule } from '../../classes/usermodule';
import { element } from 'protractor';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  userrole: string;
  userDetail: Usermodule;
  loginbtn: boolean;
  logoutbtn: boolean;

  checkfail: string;
  successfulregister: boolean = false;
  failregister: boolean = false;

  form = new FormGroup({
    personalid: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    newpassword: new FormControl('', Validators.required)
  });

  get personalid() {return this.form.get('personalid')}
  get newpassword() { return this.form.get('newpassword') }
  get password() {return this.form.get('password')}


  constructor(private loginService: LoginService
    , private sanitizer: DomSanitizer
    , private fb: FormBuilder
    , private http: HttpClient) {
    loginService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.loginService.isLoggedIn()){
      console.log("loggedin");
      this.loginbtn=false;
      this.logoutbtn=true;
    }
    else{
      localStorage.removeItem('user');
      this.loginbtn=true;
      this.logoutbtn=false;
    }
  }

  private changeName(name: boolean):void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  onSubmit() {
    const Form = new FormData();
    
    let headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
    let jsonform = JSON.parse(JSON.stringify(this.form.getRawValue()));

    this.http.post('https://parliament-meeting-api.herokuapp.com/editpass.php', { jsonform } , { responseType: "text", headers: headers })
    .subscribe(data => {
      console.log("success!");
      this.form.reset();
      this.successfulregister = !this.successfulregister;
    },
    error => {
      console.error("couldn't post because ", this.checkfail = error)
      this.failregister = !this.failregister;
    });
  }
  
  logout() {
    this.loginService.deleteToken();
    window.location.href = window.location.href;
  }
  
  getUserDetail() {
    this.loginService.getUserDetail()
    .subscribe(data => {
      this.userDetail = data[0];
      console.log(data[0]);
    });
  }

  transformImg() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64," + this.userDetail.MemberPicture);
  }

  //function for fixed navigation bar 
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if(window.pageYOffset > 15) {
      let element = document.getElementById('navbar');
      element.classList.add('scrollDown');
    }
    else {
      let element = document.getElementById('navbar');
      element.classList.remove('scrollDown');
    }
  }
  
  ngOnInit(): void {
    this.getUserDetail();

    $(document).ready(function() {
      // Check for click events on the navbar burger icon
      $(".navbar-burger").click(function() {
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          $(".navbar-burger").toggleClass("is-active");
          $(".navbar-menu").toggleClass("is-active");
      });
      
      $('#tabs li').on('click', function() {
        var tab = $(this).data('tab');

        $('#tabs li').removeClass('is-active');
        $(this).addClass('is-active');

        $('#tab-content div').removeClass('is-active');
        $('div[data-content="' + tab + '"]').addClass('is-active');
      });
    });

    $("#showModalPassword").click(function() {
      $(".editpass").addClass("is-active");  
    });
    
    $(".delete").click(function() {
      $(".modal").removeClass("is-active");
   });

    this.transformImg();
  }
}
