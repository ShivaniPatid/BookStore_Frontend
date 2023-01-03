import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/UserService/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  signupForm! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern("^[A-Z]{1}[A-Z a-z]{3,}$")]],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[A-Z a-z 0-9 +_.-]+@[A-z a-z 0-9 .-]+$")]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+=-]).{8,}$")]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
    });
  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.valid) {
      console.log("User registered successfully");
      let data = {
        fullName : this.signupForm.value.fullName,
        emailId : this.signupForm.value.email,
        password : this.signupForm.value.password,
        phoneNumber : Number(this.signupForm.value.mobileNumber)
      }
      this.user.signup(data).subscribe((response : any) => {
        console.log(response);
      })
  }
  }
}
