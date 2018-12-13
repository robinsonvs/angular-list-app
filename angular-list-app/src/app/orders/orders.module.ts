import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomersModule } from '../customers/customers.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModulo } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from '../app-routing.module';
import { OrdersComponent } from './orders.component';


@NgModule({
  imports:      [ BrowserModule, 
                  CustomersModule, 
                  OrdersRoutingModule, 
                  SharedModulo, 
                  CoreModule, 
                  AppRoutingModule ],
  declarations: [ OrdersComponent ]
})

export class OrdersModule { }