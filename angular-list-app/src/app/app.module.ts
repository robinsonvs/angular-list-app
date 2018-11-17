import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomersModule } from './customers/customers.module';
import { SharedModulo } from './shared/shared.module';
import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, CustomersModule, SharedModulo ],
  declarations: [ AppComponent ],
  providers:    [],
  bootstrap:    [AppComponent]
})

export class AppModule { }
