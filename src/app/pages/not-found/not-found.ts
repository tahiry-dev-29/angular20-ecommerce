import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [Button, RouterLink],
  template: `
    <div
      class="flex justify-center text-red-500/90 flex-col gap-5 items-center mt-40 "
    >
      <p class="text-lg">Page Not Found</p>
      <span class="ml-5 text-3xl font-bold">Error 404</span>
      <div class="flex justify-center items-center gap-1">
        <span class="text-black/90">Redirect into the page</span>
        <app-button
          routerLink="/"
          color="underline text-red-500 bg-transparent shadow-none hover:text-blue-500"
          label="Home"
        />
      </div>
    </div>
  `,
})
export class NotFound {}
