import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ngx-custom-validators';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { ShowOrdersComponent } from './components/show-orders/show-orders.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    ShowOrdersComponent,
    ViewOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    FontAwesomeModule,
    NgbModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forChild([
      { path: 'view-order/:id/:isAdmin', component: ViewOrderComponent, canActivate: [AuthGuardService] },
    ])
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    ShowOrdersComponent,
    ViewOrderComponent,

    CommonModule,
    FormsModule,
    CustomFormsModule,
    FontAwesomeModule,
    NgbModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
