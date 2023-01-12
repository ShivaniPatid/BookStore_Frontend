import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/BookService/book.service';
import { DataService } from 'src/app/services/DataService/data.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit{

  bookList : any;
  booksCount : any;
  message : any;
  subscription : any;
  searchBook : any;

  constructor(public bookService : BookService, private router : Router,private dataService : DataService ) {}

  ngOnInit(): void {
    this.getAllBooks();
    this.subscription = this.dataService.getBookDetails.subscribe(messages => {
      this.message = messages;
      console.log("display card search data======", messages.data[0]);
      this.searchBook=messages.data[0]
    })
  }

  getAllBooks() {
    this.bookService.getAllBook().subscribe((response : any ) =>{
      console.log(response);
      this.bookList=response.data;
      this.booksCount = response.data.length;
      console.log("List : ",this.bookList);
      //console.log(this.booksCount);
    })
  }

  quickView(data : any)
  {
    this.router.navigateByUrl("/dashboard/quikView");
    localStorage.setItem('bookId',data.bookId);
    console.log(data);
    console.log("Book Id : ", data.bookId);
  }

  lowtohigh(){
    this.bookList= this.bookList.sort((low:any,high:any)=> low.discountedPrice-high.discountedPrice);//low and high as argument pass in this sort the book from price 
    console.log("Book List : ",this.bookList);  
  }

  hightolow()
  {
    this.bookList= this.bookList.sort((low:any,high:any)=> high.discountedPrice-low.discountedPrice);//low and high as argument pass in this sort the book from price 
    console.log("Book List : ",this.bookList);
  }
}
