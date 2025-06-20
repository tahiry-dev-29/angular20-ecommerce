import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product';
import { Button } from '../button/button';
import { Cart } from '../../service/cart';

@Component({
  selector: 'app-product-card',
  imports: [Button],
  template: `
    <div
      class="bg-white shadow-md border-white rounded-xl p-6 flex-col gap-6 relative"
    >
      <div class="mx-auto mt-4">
        <img
          [src]="product().image"
          [alt]="product().title"
          class="w-60 h-30 object-contain"
        />
        <div class="flex flex-col mt-2">
          <span class="text-md font-bold">{{ product().title }}</span>
          <span class="text-md">{{ '$' + product().price }}</span>
          <app-button
            color="bg-blue-500"
            label="Add to Cart"
            class="mt-3"
            type="button"
            (btnClicked)="serviceCart.addToCard(product())"
          />
        </div>

        <span
          class="absolute top-2 right-3 text-sm font-bold"
          [class]="product().stock ? 'text-green-500' : 'text-red-500'"
        >
          @if (product().stock) {
          {{ product().stock }} left }@else {Out of stock}
        </span>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCard {
  product = input.required<Product>();

  readonly serviceCart = inject(Cart);
}
