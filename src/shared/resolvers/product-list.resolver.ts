import { ResolveFn } from "@angular/router";
import { Product } from "../interfaces/product";
import { catchError, Observable, of } from "rxjs";
import { inject } from "@angular/core";
import { ProductService } from "../../core/services/product/product-service";

export const ProductListResolver: ResolveFn<Product[]> = (route, state): Observable<Product[]> => {
    const productService = inject(ProductService);
    return productService.fetchProductList().pipe(
        catchError((error) => {
            console.error('Error fetching product list:', error);
            return of([]);
        })
    );
};