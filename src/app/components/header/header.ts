import { Component, inject } from '@angular/core';
import { Button } from '../button/button';
import { ProductList } from '../../pages/product-list/product-list';
import { Cart } from '../../service/cart';

@Component({
  selector: 'app-header',
  imports: [Button, ProductList],
  template: `
    <div
      class="flex justify-between items-center bg-slate-100 px-4 py-4 shadow-md"
    >
      <span>My Store</span>
      <app-button
        (btnClicked)="clicke()"
        [label]="'Cart (' + serviceCart.cart().length + ')'"
        type="button"
      />
    </div>

    <app-product-list />
  `,
  styles: ``,
})
export class Header {
  clicke() {
    console.log('hehe');
  }

  readonly serviceCart = inject(Cart);
}
