import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  token : any;

  constructor(private htttpService : HttpService) { 
    this.token = localStorage.getItem('token');
  }

  getAllBook()
  {
    let header = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        //'Authorization' : 'Bearer '+ this.token  
      })
     } 
     return this.htttpService.getService("/Book/GetAllBooks",false,header);
  }

  getBookByBookId(bookId : any)
  {
    let header = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token  
      })
     } 
     return this.htttpService.getService('/Book/GetBook?bookId=' +bookId,true,header);
  }
}
