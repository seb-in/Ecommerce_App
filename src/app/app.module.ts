import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"




import { AppComponent } from './app.component';
import { TestComponent } from './old-components/test/test.component';
import { EmployeeService } from './old-components/employee.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './old-components/material/material';
import { ReactiveFormsModule } from '@angular/forms';

import { MatModule } from './python/mat/mat.module';
import { CartItemComponent } from './ecommerce/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './ecommerce/shopping-cart/product-list/product-item/product-item.component';



















@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    routingComponents,
    CartItemComponent,
    ProductItemComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatModule
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
