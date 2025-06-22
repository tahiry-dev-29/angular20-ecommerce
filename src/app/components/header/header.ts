import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cart } from '../../service/cart';
import { Button } from '../button/button';

@Component({
  selector: 'app-header',
  imports: [Button, RouterLink],
  template: `
    <div
      class="flex justify-between items-center bg-slate-100 px-4 py-4 shadow-md"
    >
      <span
        routerLink="/"
        class="font-bold cursor-pointer text-3xl text-blue-500/90"
        >My Store</span
      >
      <app-button
        routerLink="cart"
        [label]="'Cart (' + serviceCart.cart().length + ')'"
        type="button"
      />
    </div>
  `,
  styles: ``,
})
export class Header {
  readonly serviceCart = inject(Cart);
}
