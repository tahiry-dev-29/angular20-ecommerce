import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1 class="text-3xl font-bold underline">Hello world!</h1>

    <router-outlet />
  `,
  styleUrl: './app.css',
})
export class App {
  protected title = 'ng20-ecommerce';
}
