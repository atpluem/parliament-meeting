import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service'
import { Usermodule } from '../../classes/usermodule';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  username: string;
  userDetail: Usermodule;
  loginbtn: boolean;
  logoutbtn: boolean;

  constructor(private loginService: LoginService) {
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
  
  logout() {
    this.loginService.deleteToken();
    window.location.href = window.location.href;
  }
  
  getUserDetail() {
    this.loginService.getUserDetail()
    .subscribe(data => {
      this.userDetail = data[0];
    });
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
  }
}
