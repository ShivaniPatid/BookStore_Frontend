import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/BookService/book.service';
import { CartService } from 'src/app/services/CartService/cart.service';
import { FeedbackService } from 'src/app/services/Feedback/feedback.service';
import { WishlistService } from 'src/app/services/Wishlist/wishlist.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {

  //bookId = localStorage.getItem('bookId');
  ratingPoint : any = 0 ;
  comment : any;
  book : any;
  bookId : any;
  addedToCart:any=false;
  feedBacks : any;

  constructor(private bookService : BookService, private wish:WishlistService, private cartService : CartService, private feedback : FeedbackService) {}

  ngOnInit(): void {
    this.bookId = localStorage.getItem('bookId');
    console.log("bookId = ",this.bookId)
    this.getBookByBookId(this.bookId);
    this.getFeedback(this.bookId);
  }

  getBookByBookId(bookId : any)
  {
    
    this.bookService.getBookByBookId(bookId).subscribe((response : any) => {
      console.log(response);
      this.book = response.data;
      console.log(response.data);
    })
  }

  addToWishList(){
    let data = {
      BookId: this.book.bookId,
    }
    this.wish.addToWishlist(data).subscribe((response: any) => {
      console.log("Added to wishlist", response);
    });

  }

  addToCart()
  {
    this.addedToCart = true;
    let data = {
      BookId : this.book.bookId,
      Quantity : 1
    }
    this.cartService.addToCartservice(data).subscribe((response : any) => {
      console.log("Added to cart", response);
    })
  }

  addFeedback()
  {
    let data = {
      Rating : parseInt(this.ratingPoint),
      Comment : this.comment,
      BookId : this.book.bookId
    }
    console.log(data);
    this.feedback.addFeedbackService(data).subscribe((response : any) => {
      console.log("Feedback added ",response);
      this.getFeedback(this.bookId);
    })
    this.comment = '';
    this.ratingPoint  = 0;
  }

  getFeedback(bookId : any)
  {
    this.feedback.getFeedbackService(bookId).subscribe((response : any) => {
      console.log(response);
      this.feedBacks = response.data;
    })
  }
}
