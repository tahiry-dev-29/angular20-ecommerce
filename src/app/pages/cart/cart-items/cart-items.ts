import { Component, inject, input } from '@angular/core';
import { Button } from '../../../components/button/button';
import { Product } from '../../../models/product';
import { Cart } from '../../../service/cart';
import { InputComponent } from '../../../components/input/input';

@Component({
  selector: 'app-cart-items',
  imports: [Button, InputComponent],
  template: `
    <div
      class="bg-white shadow-md border-white rounded-xl p-6 flex items-center gap-4"
    >
      <img
        [src]="item().image"
        [alt]="item().title"
        class="size-16 object-contain"
      />
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ item().title }}</span>
        <span class="text-sm text-gray-600">{{ '$' + item().price }}</span>
      </div>

      <app-input
        type="number"
        [min]="1"
        [max]="item().stock"
        [step]="1"
        [(value)]="item().quantity"
        [disabled]="item().stock === 0"
        (valueChange)="onQuantityChange($event)"
      />

      <div class="flex-1"></div>

      <app-button
        color="border-red-500 bg-red-500/70 text-white"
        label="Remove"
        (btnClicked)="serviceCart.removeFromCard(item().id)"
      />
    </div>
  `,
})
export class CartItems {
  item = input.required<Product>();
  readonly serviceCart = inject(Cart);

  onQuantityChange(newQuantity: string | number | undefined): void {
    const quantityAsNumber = Number(newQuantity);
    if (!isNaN(quantityAsNumber) && quantityAsNumber > 0) {
      this.serviceCart.updateQuantity(this.item().id, quantityAsNumber);
    }
  }
}
