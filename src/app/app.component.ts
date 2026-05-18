import { Component, signal } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/pages/home/home-page.component';
import { RulesPageComponent } from './components/pages/rules/rules-page.component';
import { SchedulePageComponent } from './components/pages/schedule/schedule-page.component';
import { NgIf } from '@angular/common';

export type Page = 'Home' | 'Rules' | 'Schedule';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent,
    HomePageComponent,
    RulesPageComponent,
    SchedulePageComponent,
    NgIf,
  ],
  template: `
    <div class="app-shell">
      <app-nav [currentPage]="currentPage()" (navigate)="currentPage.set($event)" />

      <main>
        <app-home-page   *ngIf="currentPage() === 'Home'"     (navigate)="currentPage.set($event)" />
        <app-rules-page  *ngIf="currentPage() === 'Rules'"    />
        <app-schedule-page *ngIf="currentPage() === 'Schedule'" />
      </main>

      <app-footer (navigate)="currentPage.set($event)" />
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
export class AppComponent {
  currentPage = signal<Page>('Home');
}
