import { switchMap } from 'rxjs/operators';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'shared/models/order';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {

  orders$: Observable<Order[]>;

  constructor(private authService: AuthService, private orderService: OrderService) {
    this.orders$ = authService.user$.pipe( switchMap(u => orderService.getAllByUserId(u.uid)));
   }


}
