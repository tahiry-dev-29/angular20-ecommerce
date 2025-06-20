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
  removeFromCard(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() {}
}
