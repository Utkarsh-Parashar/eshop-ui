import { Injectable, Signal, signal } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productList = signal<Product[]>([]);

  constructor(private httpClient: HttpClient) { }

  setProductList(products: Product[]): void {
    this.productList.set(products);
  }

  getProductList(): Signal<Product[]> {
    return this.productList;
  }

  fetchProductList(): Observable<Product[]> {
    return this.httpClient.get("../json/productList.json") as Observable<Product[]>;
  }

}
