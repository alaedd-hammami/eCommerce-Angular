import { ShoppingCartService } from './../services/shopping-cart.service';
import { Component, Input } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('show-actions') showActions = true;
  @Input('product') product;
  @Input('shopping-cart') shoppingCart:ShoppingCart;
  
  constructor(private cartService: ShoppingCartService) { }

  addToCart(){
    this.cartService.addToCart(this.product);
  }
}
