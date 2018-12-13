import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { SharedModulo } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OrdersModule } from './orders/orders.module';



@NgModule({
  imports:      [ BrowserModule, CoreModule, CustomersModule, OrdersModule, SharedModulo, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
