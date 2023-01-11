import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  Fullname: any;

  constructor(private route:Router, private userService : UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser()
  {
    this.userService.getUserService().subscribe((response : any) => {
      console.log("User Data : ",response.data);
      this.Fullname = response.data.fullName;
      
    })
  }
  logout()
  {
    localStorage.removeItem('token');
    this.route.navigateByUrl("/signin")
    console.log("Logout Successfully...")
  }

  cart()
  {
    this.route.navigateByUrl('/dashboard/cart');
  }

 
}
