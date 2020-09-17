import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './common/home/home.component';

import { ProductlistComponent } from './common/product-pages/productlist/productlist.component';
import { ProductdetailComponent } from './common/product-pages/productdetail/productdetail.component';
import { ProductwishlistComponent } from './common/product-pages/productwishlist/productwishlist.component';

import { UseraccountComponent } from './common/user-pages/useraccount/useraccount.component';
import { UserpanelComponent } from './common/user-pages/userpanel/userpanel.component';

import { OrderlistComponent } from './common/order-pages/orderlist/orderlist.component';
import { OrderdetailsComponent } from './common/order-pages/orderdetails/orderdetails.component';


import { UsercartComponent } from './common/cart-pages/usercart/usercart.component';
import { CartcheckoutComponent } from './common/cart-pages/cartcheckout/cartcheckout.component';

import { PaymentConfirmationComponent } from './common/payment-pages/payment-confirmation/payment-confirmation.component';
import { ContactsupportComponent } from './common/support-pages/contactsupport/contactsupport.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'productavailable', component: ProductlistComponent },
  { path: 'productdetail', component: ProductdetailComponent },
  { path: 'favourite', component: ProductwishlistComponent },
  { path: 'useraccount', component: UseraccountComponent },
  { path: 'support', component: ContactsupportComponent },
  { path: 'userpanel', component:  UserpanelComponent },
  { path: 'myorder', component:  OrderlistComponent },
  { path: 'orderdetail', component: OrderdetailsComponent },
  { path: 'mycart', component:  UsercartComponent },
  { path: 'checkout', component: CartcheckoutComponent },
  { path: 'paysuccesss', component: PaymentConfirmationComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingSharedComponents=[HeaderComponent,FooterComponent,HomeComponent];
export const routingUserComponents=[ UseraccountComponent,UserpanelComponent,ContactsupportComponent];
export const routingProductComponents=[ ProductlistComponent, ProductdetailComponent,ProductwishlistComponent];
export const routingOrderComponents=[ OrderlistComponent,OrderdetailsComponent];
export const routingCartComponents=[ UsercartComponent, CartcheckoutComponent ];
export const routingPaymentComponents=[ PaymentConfirmationComponent];