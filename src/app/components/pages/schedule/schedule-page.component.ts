import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { DISCORD_INVITE_URL, PRIDE_COLORS } from '../../../constants';

interface ScheduleEvent {
  time: string;
  label: string;
  note: string;
}

interface ScheduleDay {
  date: string;
  label: string;
  color: string;
  events: ScheduleEvent[];
}

@Component({
  selector: 'app-schedule-page',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="schedule-container">
      <h1 class="black-ops page-heading">
        Tournament
        <span class="gradient-text green-blue">Schedule</span>
      </h1>
      <p class="page-sub">
        All times listed in Eastern Time (ET). Adjust for your timezone accordingly.
      </p>
      <p class="stream-note condensed">
        🎙 Live stream on Twitch — link announced 1 week before event
      </p>

      <div class="days-list">
        <div class="day-block" *ngFor="let day of days">
          <!-- Day header with divider lines -->
          <div class="day-header">
            <div class="divider-line" [style.background]="'linear-gradient(90deg, transparent, ' + day.color + '55)'"></div>
            <div class="day-label-group">
              <div class="black-ops day-date" [style.color]="day.color">{{ day.date }}</div>
              <div class="day-subtitle condensed">{{ day.label }}</div>
            </div>
            <div class="divider-line" [style.background]="'linear-gradient(90deg, ' + day.color + '55, transparent)'"></div>
          </div>

          <!-- Timeline -->
          <div class="timeline" [style.--line-color]="day.color + '33'">
            <div class="timeline-item" *ngFor="let ev of day.events">
              <!-- Time -->
              <div class="time-col condensed">
                <span class="time-main" [style.color]="day.color">{{ ev.time.split(' ')[0] }}</span>
                <span class="time-tz">{{ ev.time.split(' ').slice(1).join(' ') }}</span>
              </div>

              <!-- Dot -->
              <div class="dot-col">
                <div class="dot"
                  [style.background]="day.color"
                  [style.box-shadow]="'0 0 0 2px ' + day.color + '55'"
                ></div>
              </div>

              <!-- Event card -->
              <div class="event-card">
                <div class="event-title condensed">{{ ev.label }}</div>
                <div class="event-note">{{ ev.note }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stay updated -->
      <div class="stay-updated">
        <div class="black-ops updated-heading">Stay Updated</div>
        <p class="updated-body">
          Schedule is subject to change. Join our Discord for real-time updates,
          match pairings, and announcements.
        </p>
        <button class="rainbow-btn small" (click)="openDiscord()">Join the PugDiff Discord ↗</button>
      </div>
    </div>
  `,
  styles: [`
    .schedule-container {
      max-width: 860px;
      margin: 0 auto;
      padding: 60px 24px;
    }

    .page-heading {
      font-family: 'Black Ops One', cursive;
      font-size: clamp(32px, 6vw, 64px);
      color: #fff;
      margin-bottom: 8px;
      text-align: center;
    }

    .gradient-text.green-blue {
      background: linear-gradient(90deg, #008018, #0000F9);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .page-sub {
      font-size: 16px;
      color: rgba(255,255,255,.55);
      text-align: center;
      margin-bottom: 16px;
      line-height: 1.7;
    }

    .stream-note {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.1em;
      color: rgba(255,255,255,.4);
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 56px;
    }

    /* ── Days ─────────────────────────────────────────────── */
    .days-list {
      display: flex;
      flex-direction: column;
      gap: 48px;
    }

    .day-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
    }

    .divider-line {
      height: 1px;
      flex: 1;
    }

    .day-label-group { text-align: center; }

    .day-date {
      font-family: 'Black Ops One', cursive;
      font-size: 22px;
      line-height: 1;
    }

    .day-subtitle {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 0.12em;
      color: rgba(255,255,255,.45);
      text-transform: uppercase;
      margin-top: 4px;
    }

    /* ── Timeline ─────────────────────────────────────────── */
    .timeline {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 68px;
      top: 0;
      bottom: 0;
      width: 1px;
      background: var(--line-color);
    }

    .timeline-item {
      display: flex;
      align-items: flex-start;
      gap: 0;
    }

    .time-col {
      min-width: 60px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding-right: 14px;
      padding-top: 14px;
      font-family: 'Barlow Condensed', sans-serif;
    }

    .time-main {
      font-weight: 700;
      font-size: 12px;
      letter-spacing: 0.04em;
      line-height: 1;
    }

    .time-tz {
      font-size: 11px;
      font-weight: 500;
      color: rgba(255,255,255,.35);
    }

    .dot-col {
      width: 16px;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      padding-top: 14px;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid #080414;
      flex-shrink: 0;
    }

    .event-card {
      flex: 1;
      background: rgba(255,255,255,.03);
      border: 1px solid rgba(255,255,255,.07);
      border-radius: 10px;
      padding: 10px 16px;
      margin-bottom: 8px;
      margin-left: 10px;
    }

    .event-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700;
      font-size: 16px;
      color: #fff;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .event-note {
      font-size: 13px;
      color: rgba(255,255,255,.5);
      margin-top: 3px;
    }

    /* ── Stay Updated ─────────────────────────────────────── */
    .stay-updated {
      margin-top: 56px;
      padding: 28px 32px;
      border-radius: 16px;
      background: rgba(255,255,255,.04);
      border: 1px solid rgba(255,255,255,.09);
      text-align: center;
    }

    .updated-heading {
      font-family: 'Black Ops One', cursive;
      font-size: 18px;
      color: #fff;
      margin-bottom: 12px;
    }

    .updated-body {
      font-size: 15px;
      color: rgba(255,255,255,.6);
      margin-bottom: 20px;
    }
  `],
})
export class SchedulePageComponent {
  days: ScheduleDay[] = [
    {
      date: 'Friday, June 19th',
      label: 'Day 1 — Group Stage',
      color: PRIDE_COLORS[4],
      events: [
        { time: '5:00 PM ET', label: 'Team Check-In', note: 'Discord check-in required for all teams' },
        { time: '5:15 PM ET', label: 'Round 1', note: 'Group A: Team A vs Team B (1 Standard Quickplay Stadium Match)' },
        { time: '5:15 PM ET', label: 'Round 1', note: 'Group B: Team D vs Team E (1 Standard Quickplay Stadium Match)' },
        { time: '6:15 PM ET', label: 'Round 2', note: 'Group A: Team B vs Team C (1 Standard Quickplay Stadium Match)' },
        { time: '6:15 PM ET', label: 'Round 2', note: 'Group B: Team E vs Team F (1 Standard Quickplay Stadium Match)' },
        { time: '7:15 PM ET', label: 'Round 3', note: 'Group A: Team A vs Team C (1 Standard Quickplay Stadium Match)' },
        { time: '7:15 PM ET', label: 'Round 3', note: 'Group B: Team D vs Team F (1 Standard Quickplay Stadium Match)' },
        { time: '8:15 PM ET', label: 'Semi-Finals', note: 'Group A #1 vs Group B #2 (1 Standard Competitive Stadium Match)' },
        { time: '8:15 PM ET', label: 'Semi-Finals', note: 'Group B #1 vs Group A #2 (1 Standard Competitive Stadium Match)' },
        { time: '9:45 PM ET', label: 'Grand Final', note: 'Winner SF1 vs Winner SF2 (Best of 3 Stadium Quickplay Matches)' },
      ],
    },
  ];

  openDiscord() {window.open(DISCORD_INVITE_URL, '_blank');}
}
