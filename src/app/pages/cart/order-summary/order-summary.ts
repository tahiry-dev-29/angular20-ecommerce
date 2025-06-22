import { Component, computed, inject, signal } from '@angular/core';
import { Button } from '../../../components/button/button';
import { Cart } from '../../../service/cart';

@Component({
  selector: 'app-order-summary',
  imports: [Button],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border-white">
      <h2 class="text-2xl">Order Summary</h2>
      <div class="flex gap-4 mb-3.5">
        <span class="text-lg">Total</span>
        <span class="text-lg font-bold">{{ '$' + total() }}</span>
      </div>
      <app-button label="Proceed to checkout" (btnClicked)="alert()" />
    </div>
  `,
  styles: ``,
})
export class OrderSummary {
  readonly serviceCart = inject(Cart);

  total = computed<number>(() => this.serviceCart.total());

  alert() {
    alert('Thancks !!!!');
  }
}
