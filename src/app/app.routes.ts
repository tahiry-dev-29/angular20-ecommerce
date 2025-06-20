import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart';
import { ProductList } from './pages/product-list/product-list';

export const routes: Routes = [
  {
    path: '',
    title: 'Product List',
    pathMatch: 'full',
    component: ProductList,
  },
  {
    title: 'Cart',
    path: 'cart',
    component: CartComponent,
  },
];
