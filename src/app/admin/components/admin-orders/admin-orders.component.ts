import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'shared/models/order';
import { OrderService } from 'shared/services/order.service';
@Component({
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent  {
  orders$: Observable<Order[]>;

  constructor(private orderService: OrderService) { 
    this.orders$ = orderService.getAll();
  }
}
