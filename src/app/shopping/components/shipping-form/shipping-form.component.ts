import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'shared/models/order';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy{
  @Input('cart') cart: ShoppingCart;
  
  shipping = {
    name:'',
    addressLine1:'',
    addressLine2:'',
    city:''
  };

  userId: string;
  subscription:Subscription;

  constructor(
    private router: Router,
    private auth: AuthService,
    private orderService: OrderService) {}

  ngOnInit(){
    this.subscription =  this.auth.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.id]);
  }  
}
