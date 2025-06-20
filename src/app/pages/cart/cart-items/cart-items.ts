import { Component, inject, input } from '@angular/core';
import { Cart } from '../../../service/cart';
import { Product } from '../../../models/product';
import { Button } from '../../../components/button/button';

@Component({
  selector: 'app-cart-items',
  imports: [Button],
  template: `
    <div class="bg-white shadow-md border-white rounded-xl p-6 flex">
      <img
        [src]="item().image"
        [alt]="item().title"
        class="size-14 mr-4 object-contain"
      />
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ item().title }}</span>
        <span class="text-sm">{{ '$' + item().price }}</span>
      </div>
      <div class="flex-1"></div>
      <app-button
        color="border-red-500 bg-red-500/70 text-black"
        label="Remove"
        (btnClicked)="serviceCart.removeFromCard(item().id)"
      />
    </div>
  `,
  styles: ``,
})
export class CartItems {
  item = input.required<Product>();

  readonly serviceCart = inject(Cart);
}
