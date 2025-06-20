import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <app-header />

    <router-outlet />
  `,
  styleUrl: './app.css',
})
export class App {
  protected title = 'ng20-ecommerce';
}
