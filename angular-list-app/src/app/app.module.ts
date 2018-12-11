import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { SharedModulo } from './shared/shared.module';
import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, CoreModule, CustomersModule, SharedModulo ],
  declarations: [ AppComponent ],
  providers:    [],
  bootstrap:    [AppComponent]
})

export class AppModule { }
