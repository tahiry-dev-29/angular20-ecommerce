import { Component, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4 md:grid-cols-3">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
      }@empty {
      <div class="col-span-full flex justify-center items-center">
        <p class="text-2xl font-bold text-center">Unknown products</p>
      </div>
      }
    </div>
  `,
  styles: ``,
})
export class ProductList {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Produit 1',
      image: 'assets/images/product-01.png',
      price: 19.99,
      stock: 10,
    },
    {
      id: 2,
      title: 'Produit 2',
      image: 'assets/images/product-02.png',
      price: 29.99,
      stock: 5,
    },
    {
      id: 3,
      title: 'Produit 3',
      image: 'assets/images/product-03.png',
      price: 39.99,
      stock: 0,
    },
    {
      id: 4,
      title: 'Produit 4',
      image: 'assets/images/product-04.png',
      price: 24.99,
      stock: 8,
    },
    {
      id: 5,
      title: 'Produit 5',
      image: 'assets/images/product-05.png',
      price: 49.99,
      stock: 2,
    },
  ]);
}
