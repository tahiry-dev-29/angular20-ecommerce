import { Component, inject } from '@angular/core';
import { Cart } from '../../service/cart';
import { CartItems } from './cart-items/cart-items';
import { OrderSummary } from './order-summary/order-summary';
import { Button } from '../../components/button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CartItems, OrderSummary, Button, RouterLink],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2xl">Shoppping Cart</h2>
      @for (item of serviceCart.cart(); track $index) {
      <app-cart-items [item]="item" />
      }@empty {
      <div
        class="col-span-full flex flex-col gap-2.5 mt-10 justify-center items-center"
      >
        <p>Your hopping cart is empty</p>
        <app-button
          routerLink="/"
          label="Add Product"
          color="bg-green-500 text-white"
        />
      </div>
      } @if (serviceCart.cart().length) {
      <app-order-summary />
      }
    </div>
  `,
  styles: ``,
})
export class CartComponent {
  readonly serviceCart = inject(Cart);
}
