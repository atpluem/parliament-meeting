import { Component, OnInit, HostListener } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { element } from 'protractor';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: []
})
export class HomeComponent implements OnInit {
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

  /* function for smooth scrolling to another section */
  SmoothTo($element) : void {
    $element.scrollIntoView({behavior: "smooth"});
  }

  /* function for fix navigation bar in top */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if(window.pageYOffset > 20){
      let element = document.getElementById('navbar');
      element.classList.add('sticky');
    }
    else {
      let element = document.getElementById('navbar');
      element.classList.remove('sticky');
    }

    /* part of parallax scorlling effect */
    let parallax = document.getElementById('parallax');
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.09 + "px";
  }

  ngOnInit(): void {
    $(document).ready(function() {
      // Check for click events on the navbar burger icon
      $(".navbar-burger").click(function() {
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          $(".navbar-burger").toggleClass("is-active");
          $(".navbar-menu").toggleClass("is-active");
      });
    });
  }

}
