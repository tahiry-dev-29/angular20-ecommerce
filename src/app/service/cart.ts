import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  // Le signal qui contient les produits du panier
  cart = signal<Product[]>([]);

  total = computed(() => {
    return this.cart().reduce(
      (acc, item) => acc + item.price * (item.quantity ?? 1),
      0
    );
  });

  totalQuantity = computed(() => {
    return this.cart().reduce((acc, p) => acc + (p.quantity ?? 0), 0);
  });

  addToCard(product: Product, quantity: number = 1) {
    this.cart.update((items) => {
      const itemInCart = items.find((p) => p.id === product.id);
      if (itemInCart) {
        // Si l'article existe, on augmente sa quantité
        itemInCart.quantity! += quantity;
        return [...items];
      } else {
        // Sinon, on l'ajoute au panier
        return [...items, { ...product, quantity }];
      }
    });
  }

  updateQuantity(productId: number, newQuantity: number) {
    this.cart.update((items) => {
      const itemToUpdate = items.find((p) => p.id === productId);
      if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity;
      }
      return [...items];
    });
  }

  removeFromCard(productId: number) {
    this.cart.update((items) => items.filter((p) => p.id !== productId));
  }
}
