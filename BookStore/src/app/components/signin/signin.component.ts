import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{

  signinForm! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user : UserService,private router : Router) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[A-Z a-z 0-9 +_.-]+@[A-z a-z 0-9 .-]+$")]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+=-]).{8,}$")]]
    });
  }
  get f() { return this.signinForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.signinForm.valid) {
      let data = {
        emailId : this.signinForm.value.email,
        password : this.signinForm.value.password
      }
      this.user.signin(data).subscribe((response : any) => {
        console.log(response);
        localStorage.setItem("token",response.data);
        this.router.navigateByUrl("/dashboard/getAllBooks");
      })
  }
  }
}
