import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { HomeComponent } from './components/home/home.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [

  {path : 'signup', component : SignupComponent},
  {path : 'signin', component : SigninComponent},
  {path : 'forgetPassword', component : ForgetPasswordComponent},
  {path : 'resetPassword', component : ResetPasswordComponent},
  {path : 'dashboard', component : HomeComponent,
  children : [
    {path : 'getAllBooks', component : GetAllBooksComponent},
    {path : 'quikView', component : QuickViewComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
