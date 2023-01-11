import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  token : any;

  constructor(private httpService : HttpService) {
    this.token = localStorage.getItem('token');
   }

   
   getAllAddressService()
   {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpService.getService('/Address/GetAll', true, header);
   }
   
   addAddressService(payload : any)
   {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpService.postService('/Address/Add',payload, true, header);
   }
}
