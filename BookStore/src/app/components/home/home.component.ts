import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/DataService/data.service';
import { UserService } from 'src/app/services/UserService/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  Fullname: any;
  value : any;
  constructor(private route:Router, private userService : UserService, private dataservice : DataService) { }

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

  searchBook(event : any)
  {
    console.log("input in search field===",event.target.value);
    this.value=event.target.value
    let Ddata={
      type:'search',
      data:[this.value]
    }
    this.dataservice.SendBookDetails(Ddata)
  }
}
