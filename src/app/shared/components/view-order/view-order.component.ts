import { take } from 'rxjs/operators';
import { OrderService } from 'shared/services/order.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'shared/models/order';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent {
  order = new Order('','',new ShoppingCart([]));
  previous: string;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
  ) {
    let id = this.route.snapshot.paramMap.get('id');
    let isAdmin = this.route.snapshot.paramMap.get('isAdmin');
    this.previous = isAdmin === 'true' ? '/admin/orders' : '/my/orders';

    if(id) orderService.getOrder(id)
    .pipe(take(1)).subscribe(o => this.order = o); 

  }
}
