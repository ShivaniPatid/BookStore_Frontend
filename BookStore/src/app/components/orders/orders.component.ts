import { Component,OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/OrderService/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orderlist : any;

  constructor(private orderService : OrderService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders()
  {
    this.orderService.getAllOrderService().subscribe((response : any) =>
    {
      console.log("All Orders", response.data);
      this.orderlist = response.data;
    })
  }

  getShortDate(date:any){
    return date.split('T')[0]
  }
}
