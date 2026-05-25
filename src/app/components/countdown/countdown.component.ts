import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { PRIDE_COLORS, TOURNAMENT_DATE } from '../../constants';

interface TimeUnit {
  label: string;
  val: number;
  color1: string;
  color2: string;
}

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="countdown">
      <div class="unit" *ngFor="let u of units()">
        <div
          class="value black-ops"
          [style.background]="'linear-gradient(180deg,' + u.color1 + ',' + u.color2 + ')'"
        >{{ pad(u.val) }}</div>
        <div class="label condensed">{{ u.label }}</div>
      </div>
    </div>
  `,
  styles: [`
    .countdown {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
      margin: 40px 0;
    }

    .unit {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 16px;
      padding: 20px 28px;
      text-align: center;
      min-width: 90px;
    }

    .value {
      font-family: 'Black Ops One', cursive;
      font-size: 48px;
      line-height: 1;
      color: #ffffff;
    }

    .label {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 12px;
      letter-spacing: 0.12em;
      color: rgba(255, 255, 255, 0.85);
      text-transform: uppercase;
      margin-top: 6px;
    }
  `],
})
export class CountdownComponent implements OnInit, OnDestroy {
  private intervalId: ReturnType<typeof setInterval> | null = null;

  units = signal<TimeUnit[]>([]);

  private colors = PRIDE_COLORS;

  ngOnInit() {
    this.tick();
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  private tick() {
    const diff = TOURNAMENT_DATE.getTime() - Date.now();
    const safe = Math.max(diff, 0);

    const d = Math.floor(safe / 86_400_000);
    const h = Math.floor((safe % 86_400_000) / 3_600_000);
    const m = Math.floor((safe % 3_600_000) / 60_000);
    const s = Math.floor((safe % 60_000) / 1_000);

    this.units.set([
      { label: 'Days',    val: d, color1: this.colors[0], color2: this.colors[1] },
      { label: 'Hours',   val: h, color1: this.colors[1], color2: this.colors[2] },
      { label: 'Minutes', val: m, color1: this.colors[3], color2: this.colors[4] },
      { label: 'Seconds', val: s, color1: this.colors[4], color2: this.colors[5] },
    ]);
  }

  pad(n: number): string {
    return String(n).padStart(2, '0');
  }
}
