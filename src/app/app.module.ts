import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CartItemComponent } from './ecommerce/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './ecommerce/shopping-cart/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
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
    HttpClientModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
