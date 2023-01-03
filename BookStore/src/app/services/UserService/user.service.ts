import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  
  constructor(private httpService : HttpService) { 
    

  }

  signup(payload : any)
  {
    let header = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService("/User/Register", payload, false, header)
  }

  signin(payload : any)
  {
    let header = {
      headers : new HttpHeaders({
      'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService(`/User/Login?emailId=${payload.emailId}&password=${payload.password}`,payload, false, header)
  }

  forgetPassword(payload : any){
    let header = {
      headers : new HttpHeaders({
      'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService(`/User/ForgetPassword?email=${payload.emailId}`,payload, false, header)
  
  }

  resetPassword(payload: any,token : any)
  {
   let header = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer '+token  
    })
   } 
   return this.httpService.postService(`/User/ResetPassword?password=${payload.password}&confirmPassword=${payload.confirmPassword}`,{}, true, header)
  }
}
