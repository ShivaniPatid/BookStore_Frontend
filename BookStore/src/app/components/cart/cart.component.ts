import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/AddressService/address.service';
import { CartService } from 'src/app/services/CartService/cart.service';
import { OrderService } from 'src/app/services/OrderService/order.service';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  userlist : any;
  cartlist: any;
  bookId: any;
  book_qty: any;
  step: number = 0;
  Fullname: any;
  MobileNumber: any;
  addressList: any;
  addressId = 1;
  userId: any;
  addressObj: any;
  isAddEditAddress: boolean = false;
  edit = false;
  fullAddress: any;
  city: any;
  state: any;
   typeId : any
  //fullName : any;
  constructor(private cartService: CartService, private addressService: AddressService, private orderService: OrderService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem('bookId');
    this.getCart();
    this.getAllAddress();
    this.getUser();
  }

  getCart() {
    this.cartService.getCartService().subscribe((response: any) => {
      console.log(response.data);
      this.cartlist = response.data;
      console.log("List : ", this.cartlist);
    })
  }

  removeFromCart(cartId: any) {
    this.cartService.removeFromCartService(cartId).subscribe((response: any) => {
      console.log("Removerd from cart");
      this.getCart();
    })
  }

  decreaseQuantity(cartId: any, quantity: any) {
    console.log(quantity);
    this.book_qty = quantity - 1;
    this.cartService.updateCartservice(cartId, this.book_qty).subscribe((response: any) => {
      console.log(response);
      this.getCart();
    })
  }

  increaseQuantity(cartId: any, quantity: any) {
    console.log(quantity);
    this.book_qty = quantity + 1;
    this.cartService.updateCartservice(cartId, this.book_qty).subscribe((response: any) => {
      console.log(response);
      this.getCart();
    })
  }

  addressBar() {
    this.step = 1;
  }

  orderBar() {
    this.step = 2;

  }

  getAllAddress() {
    this.addressService.getAllAddressService().subscribe((response: any) => {
      console.log(response.data);
      this.addressList = response.data;
      console.log("Address List : ", this.addressList);
    })
  }

  addOrder() {
    if (this.cartlist?.length > 0) {
      let data = {
        BookId: parseInt(this.bookId),
        AddressId: this.addressId,
      }
      this.orderService.addOrderService(data).subscribe((response: any) => {
        console.log("Placed order", response);
        console.log("Cart List : ", this.cartlist)
        this.getCart();
        this.step = 0;
        this.router.navigateByUrl('/dashboard/orderPlaced')
      })
    }
  }

  getUser()
  {
    this.userService.getUserService().subscribe((response : any) => {
      console.log("User Data : ",response.data);
      this.Fullname = response.data.fullName;
      this.MobileNumber = response.data.phoneNumber
      
    })
  }


  editAddress() {
    this.edit = true;
  }

  addNewAddress() {
    this.isAddEditAddress = true;
    this.addressObj = [];
    this.fullAddress = '';
    this.Fullname = '';
    this.MobileNumber = '';
    this.city = '';
    this.state = '';
    this.typeId = '';
  }

  addAddress(){
    if(this.fullAddress && this.city && this.state && this.typeId != ''){
      let reqdata = {
        fullAddress: this.fullAddress,
        city: this.city,
        state: this.state,
        typeId: Number(this.typeId)

      }
      console.log(reqdata);
      this.addressService.addAddressService(reqdata).subscribe((response:any)=> {
        console.log("New Address Added successfully", response);
        this.getAllAddress();
      })
    }
  }
}

