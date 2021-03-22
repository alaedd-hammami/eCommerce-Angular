import { Component, Input } from '@angular/core';
import { Order } from 'shared/models/order';

@Component({
  selector: 'show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.css']
})
export class ShowOrdersComponent {
  @Input('orders') orders: Order[];
  @Input('is-admin') isAdmin: boolean;
}
