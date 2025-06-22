import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <input
      class="border border-gray-300 rounded-md px-3 py-2 text-base w-full transition-all duration-200 ease-in-out focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
      [type]="type()"
      [placeholder]="placeholder()"
      [value]="value()"
      [disabled]="disabled()"
      [min]="min()"
      [max]="max()"
      [step]="step()"
      (input)="onInput($event)"
    />
  `,
})
export class InputComponent {
  type = input.required<string>(); // 'number' | 'text' | 'email' | 'password'
  placeholder = input<string>('');
  value = input<number | string | undefined>(undefined);
  disabled = input<boolean>(false);
  min = input<number>();
  max = input<number>();
  step = input<number>();

  valueChange = output<number | string>();

  onInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    let finalValue: number | string = inputValue;

    if (this.type() === 'number') {
      finalValue = inputValue === '' ? 0 : parseFloat(inputValue);
    }

    this.valueChange.emit(finalValue);
  }
}
