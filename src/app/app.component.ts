import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    FooterComponent,
  ],
  template: `
    <div class="app-shell">
      <app-nav />

      <main>
        <router-outlet></router-outlet>
      </main>

      <app-footer />
    </div>
  `,
  styles: [`
    .app-shell {
      min-height: 100vh;
      background: #080414;
      color: #fff;
      font-family: 'Barlow', sans-serif;
    }
  `],
})
export class AppComponent {}
