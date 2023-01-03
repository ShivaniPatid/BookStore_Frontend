import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  fullName: any='';

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.fullName = localStorage.getItem('FullName');
  }

  logout()
  {
    localStorage.removeItem('token');
    this.route.navigateByUrl("/signin")
  }
}
