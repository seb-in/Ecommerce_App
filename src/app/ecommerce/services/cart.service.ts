import { map } from 'rxjs/operators';
import { cartUrl } from './../../config/api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItem: CartItem[] = [];

        for (let item of result) {
          let productExists = false;

          for (let k in cartItem) {
            if (cartItem[k].productId == item.product.id) {
              cartItem[k].qty++;
              break;
            }
          }
          if (!productExists) {
            cartItem.push(new CartItem(item.id, item.product));
          }
        }

        return cartItem;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product });
  }
}
