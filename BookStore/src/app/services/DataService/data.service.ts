import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private BookDetails = new BehaviorSubject({type:'',data:[]});
  getBookDetails = this.BookDetails.asObservable();

  SendBookDetails(book:any)
  {
    this.BookDetails.next(book);
  }
}
