import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './ecommerce/shared/header/header.component';
import { FooterComponent } from './ecommerce/shared/footer/footer.component';
import { NavComponent } from './ecommerce/shared/nav/nav.component';
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component';
import { HomeComponent } from './ecommerce/home/home.component';
import { FiltersComponent } from './ecommerce/shopping-cart/filters/filters.component';
import { ProductListComponent } from './ecommerce/shopping-cart/product-list/product-list.component';
import { CartComponent } from './ecommerce/shopping-cart/cart/cart.component';
import { TryComponent } from './ecommerce/components/try/try.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'nav', component: NavComponent },
  { path: 'header', component: FooterComponent },
  { path: 'footer', component: NavComponent },
  { path: 'shopping', component: ShoppingCartComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'try', component: TryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ NavComponent, HeaderComponent, FooterComponent, NavComponent, ShoppingCartComponent, HomeComponent,  FiltersComponent, ProductListComponent, CartComponent, TryComponent]