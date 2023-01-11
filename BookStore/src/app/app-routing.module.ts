import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { HomeComponent } from './components/home/home.component';
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';
import { OrdersComponent } from './components/orders/orders.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [

  {path : 'signup', component : SignupComponent},
  {path : 'signin', component : SigninComponent},
  {path : 'forgetPassword', component : ForgetPasswordComponent},
  {path : 'resetPassword', component : ResetPasswordComponent},
  {path : 'dashboard', component : HomeComponent,
  children : [
    {path : 'getAllBooks', component : GetAllBooksComponent},
    {path : 'quikView', component : QuickViewComponent},
    {path : 'wishlist', component : WishlistComponent},
    {path : 'cart', component : CartComponent},
    {path : 'orderPlaced', component : OrderPlacedComponent},
    {path : 'orders', component : OrdersComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
