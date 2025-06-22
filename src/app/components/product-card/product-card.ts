import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { Button } from '../button/button';
import { Cart } from '../../service/cart';
import { InputComponent } from '../input/input';

@Component({
  selector: 'app-product-card',
  imports: [Button, InputComponent],
  template: `
    <div
      class="bg-white shadow-md border-white rounded-xl p-6 flex flex-col gap-4 relative"
    >
      <div class="mx-auto pt-4 mt-4 text-center">
        <img
          [src]="product().image"
          [alt]="product().title"
          class="w-60 h-40 object-contain"
        />
        <div class="flex flex-col mt-4">
          <span class="text-lg font-bold">{{ product().title }}</span>
          <span class="text-md text-gray-700">{{ '$' + product().price }}</span>

          <div class="flex flex-wrap items-center justify-center gap-2 mt-4">
            <label for="quantity" class="text-sm font-medium">Quantity:</label>
            <app-input
              type="number"
              [min]="1"
              [max]="product().stock"
              [step]="1"
              [value]="quantity()"
              (valueChange)="onQuantityChange($event)"
            />
          </div>

          <app-button
            color="bg-blue-600 hover:bg-blue-700 text-white"
            label="Add to Cart"
            class="mt-4"
            type="button"
            [disabled]="product().stock === 0"
            (btnClicked)="onAddToCart()"
          />
        </div>

        <span
          class="absolute top-3 right-4 text-sm font-bold px-2 py-1 rounded-full"
          [class]="
            product().stock
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          "
        >
          @if (product().stock) {
          {{ product().stock }} in stock } @else { Out of stock }
        </span>
      </div>
    </div>
  `,
})
export class ProductCard {
  readonly serviceCart = inject(Cart);
  product = input.required<Product>();

  quantity = signal(1);

  onQuantityChange(value: string | number): void {
    this.quantity.set(Number(value));
  }

  onAddToCart(): void {
    this.serviceCart.addToCard(this.product(), this.quantity());
    this.quantity.set(1);
  }
}
