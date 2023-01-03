import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/UserService/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  resetForm!: FormGroup;
  submitted = false;
  token: any;
  
  constructor(private formBuilder: FormBuilder, private user: UserService, private activeRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group
      ({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]]

      });
      //this.token = this.activeRoute.snapshot.paramMap.get('token');

      this.token = localStorage.getItem('token');
      
  }
  get f() { return this.resetForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.resetForm.valid) {

      console.log(this.resetForm.value);
      let payload = {
        password: this.resetForm.value.password,
        confirmPassword: this.resetForm.value.confirmPassword
      }


      this.user.resetPassword(payload,this.token).subscribe((response: any) => {
        console.log(response);
        this.router.navigateByUrl('/signin');
      })
    }

  }
}
