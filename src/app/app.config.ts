import { ApplicationConfig } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home/home-page.component';
import { RulesPageComponent } from './components/pages/rules/rules-page.component';
import { SchedulePageComponent } from './components/pages/schedule/schedule-page.component';
import { ParticipantsPageComponent } from './components/pages/participants/participants-page.component';
import { BracketPageComponent } from './components/pages/bracket/bracket-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'rules', component: RulesPageComponent },
  { path: 'schedule', component: SchedulePageComponent },
  { path: 'bracket', component: BracketPageComponent },
  { path: 'participants', component: ParticipantsPageComponent },
  { path: '**', redirectTo: 'home' },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
