import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  addToCartservice(payload: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postService(`/Cart/AddCart?bookId=${payload.BookId}&quantity=${payload.Quantity}`, payload, true, header);
  }

  getCartService() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService("/Cart/GetCart", true, header);
  }

  removeFromCartService(cartId : any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.deleteService('/Cart/DeleteCart?cartId='+cartId, true, header);
  }

  updateCartservice(cartId : any, quantity : any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService('/Cart/UpdateCart?cartId='+cartId+'&quantity='+quantity,cartId, true, header);
  }
}


