import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productUrl} from 'src/app/config/api';

const apiUrl = 'http://localhost:3000/products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //TODO: Populate products from an API
  products: Product[] = [
    // new Product(1, 'Product 1', 'This is the product 1 desecription. The product is really cool', 100, './assets/ecommerce/dental.jpg'),
    // new Product(2, 'Product 2', 'This is the product 2 desecription. The product is really cool', 120, './assets/ecommerce/dental4.jpg'),
    // new Product(3, 'Product 3', 'This is the product 3 desecription. The product is really cool', 200, './assets/ecommerce/dental3.jpg'),
    // new Product(4, 'Product 4', 'This is the product 4 desecription. The product is really cool', 150, './assets/ecommerce/kit2.jpg'),
    // new Product(5, 'Product 5', 'This is the product 5 desecription. The product is really cool', 160, './assets/ecommerce/kit3.jpg'),
    // new Product(6, 'Product 6', 'This is the product 6 desecription. The product is really cool', 210, './assets/ecommerce/kit.jpg'),
  ]

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
      //TODO: Populate products from an API and return an Observable
    return this.http.get<Product[]>(apiUrl);
  }
}
