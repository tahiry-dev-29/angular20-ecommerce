import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart';
import { ProductList } from './pages/product-list/product-list';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'products',
    title: 'Product List',
    component: ProductList,
  },
  {
    path: 'cart',
    title: 'Cart',
    component: CartComponent,
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
