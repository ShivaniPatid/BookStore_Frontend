import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  addFeedbackService(payload : any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpService.postService(`/Feedback/AddFeddback?bookId=${payload.BookId}`,payload,true,header)
  }

  getFeedbackService(bookId : any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.getService(`/Feedback/GetFeedback?bookId=`+bookId, false, header);
  }
}
