import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  token : any;

  constructor(private http : HttpService) { 
    this.token = localStorage.getItem('token');
  }

  addToWishlist(payload : any)
  {
    let header = {
      headers : new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.postService(`/Wishlist/Add?bookId=${payload.BookId}`,payload, true, header)
  }

  getwishlistService()
  {
    let header = {
      headers : new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.getService("/Wishlist/View", true, header);
  }

  removeFromWishlistService(wishlistId : any)
  {
    let header = {
      headers : new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.deleteService('/Wishlist/Delete?wishlistId='+wishlistId, true, header);
  }
}
