import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders.component';
import { OrderRoutingModule } from './orders-routing.module';


@NgModule({
    imports: [ CommonModule, FormsModule, SharedModule, OrderRoutingModule ],
    declarations: [ OrdersComponent ]
})

export class OrdersModule { }