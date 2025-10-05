import { Routes } from '@angular/router';
import { ProductListResolver } from '../shared/resolvers/product-list.resolver';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('../core/components/home-component/home-component').then(m => m.HomeComponent)},
    {
        path: 'product',
        resolve: { products: ProductListResolver },
        loadComponent: () => import('../core/components/product-list-component/product-list-component').then(m => m.ProductListComponent)
    },
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];