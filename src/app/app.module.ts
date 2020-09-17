import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingSharedComponents,routingProductComponents,routingUserComponents,routingOrderComponents,routingCartComponents,routingPaymentComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/Http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AboutusComponent } from './common/aboutus/aboutus.component';






@NgModule({
  declarations: [
    AppComponent,
    routingSharedComponents,
    routingProductComponents,
    routingOrderComponents,
    routingCartComponents,
    routingUserComponents,
    routingPaymentComponents,
    AboutusComponent,
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
