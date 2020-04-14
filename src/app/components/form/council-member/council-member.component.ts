import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CouncilMemberService } from 'src/app/services/council-member.service';

@Component({
  selector: 'app-council-member',
  templateUrl: './council-member.component.html',
  styleUrls: ['./council-member.component.css']
})
export class CouncilMemberComponent implements OnInit {
  councilMemberForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private councilMember: CouncilMemberService) { }

  ngOnInit(): void {
  }

  // onSubmit(councilMemberForm) {
  //   this.loginService.userlogin(loginForm.value.username, loginForm.value.password)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         const redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/home';
  //         this.router.navigate([redirect]);
  //       },
  //       error => {
  //         alert("User name or password is incorrect")
  //       }  
  //     );
  // }
  // get username() {return this.loginForm.get('username');}
  // get password() {return this.loginForm.get('password');}
}
