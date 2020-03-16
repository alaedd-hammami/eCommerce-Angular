import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'app/services/order.service';
import { Order } from 'shared/models/order';
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
