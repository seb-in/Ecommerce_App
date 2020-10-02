import { CartService } from './../../../services/cart.service';
import { MessengerService } from './../../../services/messenger.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/ecommerce/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product

  constructor(
    private cartService: CartService,
    private msg: MessengerService) { }

  ngOnInit(): void { 
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(()=>{
      this.msg.sendMsg(this.productItem)
    })
    
  }

}
