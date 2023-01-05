import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/BookService/book.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit{

  bookList : any;
  booksCount : any;

  constructor(public bookService : BookService, private router : Router) {}

  ngOnInit(): void {
    this.getAllBooks();
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
}
