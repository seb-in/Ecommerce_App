import { CartService } from './../../services/cart.service';
import { MessengerService } from './../../services/messenger.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // { id: 1, productId: 1, productName: 'Test 1', qty: 4, price: 100 },
    // { id: 2, productId: 3, productName: 'Test 3', qty: 5, price: 50 },
    // { id: 3, productId: 2, productName: 'Test 2', qty: 3, price: 10 },
    // { id: 4, productId: 4, productName: 'Test 4', qty: 2, price: 110 },
    // { id: 5, productId: 5, productName: 'Test 5', qty: 1, price: 100 }
  ];

  constructor(
    private cartService: CartService,
    private msg: MessengerService) { }

  cartTotal = 0
  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product:Product) =>{
      // this.addProductToCart(product)
      this.loadCartItems();
    })
  }

  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[])=>{
      this.cartItems = items;
      this.calculateCartTotal();
    })

  }

  // addProductToCart(product: Product) {
  //   let productExists = false

  //   for (let k in this.cartItems) {
  //     if (this.cartItems[k].productId == product.id) {
  //       check_cart = true
  //       this.cartItems[k].qty++
  //       break;
  //     }
  //   }
  //   if(!check_cart) {
  //     this.cartItems.push({
  //       productId: product.id,
  //       productName: product.name,
  //       qty: 1,
  //       price: product.price
  //     })
  //   }

  //   this.calculateCartTotal();
    
  // }

  calculateCartTotal(){
    this.cartTotal = 0
    this.cartItems.forEach( i=> {
      this.cartTotal += ( i.qty * i.price )
    })
  }
}
