import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingSharedComponents,routingProductComponents,routingUserComponents,routingOrderComponents,routingCartComponents,routingPaymentComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/Http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    routingSharedComponents,
    routingProductComponents,
    routingOrderComponents,
    routingCartComponents,
    routingUserComponents,
    routingPaymentComponents
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
