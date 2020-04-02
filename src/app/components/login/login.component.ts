import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  message: any;
  // test php
  data = [];

  constructor(private formBuilder: FormBuilder,
    private router: Router,
//    private apiService: LoginService,
    private http: HttpClient) {
      // Test DB
      this.http.get('http://localhost/employee.php').subscribe(
        data => {
          this.data.push(data);
          console.log(this.data);
        },error => console.error(error)
      );
  }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }
  
  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    }
    const loginData = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };
  }

  
}
