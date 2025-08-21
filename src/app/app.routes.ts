import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: '/product', pathMatch: 'full'},
    {path: 'product', loadComponent: () => import('../core/components/product-list-component/product-list-component').then(m => m.ProductListComponent)},
    {path: '**', redirectTo: '/product', pathMatch: 'full'}
];
