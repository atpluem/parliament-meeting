import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service'
import { first } from 'rxjs/operators';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService) {
      this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required,Validators.minLength(1)]],
        password: ['', Validators.required]
      });
  }
  
  ngOnInit(): void {
  }
  
  onSubmit(loginForm) {
    this.loginService.userlogin(loginForm.value.username, loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          const redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/home';
          this.router.navigate([redirect]);
        },
        error => {
          alert("User name or password is incorrect")
        }  
      );
  }
  get username() {return this.loginForm.get('username');}
  get password() {return this.loginForm.get('password');}
}
