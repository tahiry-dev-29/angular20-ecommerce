import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart = signal<Product[]>([]);

  addToCard(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  constructor() {}
}
