import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/UserService/user.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forgetForm! : FormGroup;
  submitted = false;
  token : any;
  constructor(private form:FormBuilder,private user: UserService, private router:Router){}

  ngOnInit(): void {
    this.forgetForm = this.form.group({
      email : ['', Validators.required]
    })
    
  }

  get f() { return this.forgetForm.controls; }

  onSubmit() {
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.forgetForm.valid) {
      let data = {
        emailId : this.forgetForm.value.email
      }
      console.log(data);
      this.user.forgetPassword(data).subscribe((response : any) => {
        console.log(response);
        localStorage.setItem("token",response.data)

        this.router.navigateByUrl('resetPassword')
      })
      }
  }
}
