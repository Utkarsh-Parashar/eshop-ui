import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { Product } from '../../../shared/interfaces/product';
import { MatButtonModule } from '@angular/material/button';
import { ProductFilterComponent } from '../../../shared/components/product-filter-component/product-filter-component';
import { ProductService } from '../../services/product/product-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list-component',
  imports: [ProductCard, ProductFilterComponent, MatButtonModule],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.scss'
})
export class ProductListComponent implements OnInit {

  categoryList: string[] = ['All', 'Electronics', 'Clothing', 'Books', 'Home Appliances', 'Toys', 'Sports', 'Beauty'];
  products: Product[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.products = data['products'];
      this.productService.setProductList(this.products);
    });
    console.log(this.productService.getProductList()());
    
  }
  
}
