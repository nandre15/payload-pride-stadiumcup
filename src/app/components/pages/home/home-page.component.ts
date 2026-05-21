import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PRIDE_COLORS, GOOGLE_FORM_URL, DISCORD_INVITE_URL } from '../../../constants';
import { CountdownComponent } from '../../countdown/countdown.components';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgFor, CountdownComponent, RouterLink],
  template: `
    <!-- ── Hero ─────────────────────────────────────────────── -->
    <section class="hero">
      <div class="orb" *ngFor="let c of prideColors; let i = index"
        [style.width.px]="40 + i * 15"
        [style.height.px]="40 + i * 15"
        [style.background]="c"
        [style.top]="(10 + i * 13) + '%'"
        [style.left]="(5 + i * 15) + '%'"
      ></div>
      <div class="hero-content">
        <div class="event-badge condensed">
          🏳️‍🌈 Overwatch Stadium Mode · June 21, 2026
        </div>

        <h1 class="black-ops hero-title">PAYLOAD</h1>
        <h2 class="black-ops hero-sub">PRIDE CUP</h2>

        <p class="hero-desc">
          Overwatch Stadium tournament for the queer community.
          Compete, celebrate, and push the payload — together.
        </p>

        <div class="hero-ctas">
          <button class="rainbow-btn large" (click)="openForm()">Register Now ↗</button>
          <button class="rainbow-btn large" [routerLink]="['/rules']">View Rules</button>
        </div>

        <app-countdown />
      </div>
    </section>

    <!-- ── What Is Payload Pride Cup ─────────────────────────── -->
    <section class="section-container">
      <h2 class="black-ops section-heading">
        What Is
        <span class="gradient-text red-purple">Payload Pride Cup?</span>
      </h2>

      <div class="feature-grid">
        <div class="glass-card" *ngFor="let f of features">
          <div class="feature-icon">{{ f.icon }}</div>
          <div class="feature-title condensed">{{ f.title }}</div>
          <div class="feature-body">{{ f.body }}</div>
        </div>
      </div>
    </section>

    <!-- ── Community Values ───────────────────────────────────── -->
    <section class="values-section">
      <div class="values-inner">
        <h2 class="black-ops section-heading">Our Values</h2>
        <p class="values-desc">
          Payload Pride Cup is more than a tournament. It's a community.
          These values guide everything we do.
        </p>
        <div class="values-tags">
          <span class="value-tag condensed"
            *ngFor="let v of values; let i = index"
            [style.background]="prideColors[i % 6] + '22'"
            [style.border]="'1px solid ' + prideColors[i % 6] + '55'"
            [style.color]="prideColors[i % 6]"
          >{{ v }}</span>
        </div>
      </div>
    </section>

    <!-- ── Sponsors ───────────────────────────────────────────── -->
    <section class="section-container" style="text-align:center">
      <div class="sponsors-label condensed">Partners</div>
      <div class="sponsors-grid">
        <div class="sponsor-slot condensed" *ngFor="let s of sponsors">{{ s }}</div>
      </div>
    </section>

    <!-- ── Final CTA ──────────────────────────────────────────── -->
    <section class="cta-section">
      <h2 class="black-ops cta-heading">Ready to Push the Payload?</h2>
      <p class="cta-sub">Spots are limited. Register before they fill up.</p>
      <div class="hero-ctas">
        <button class="rainbow-btn small" (click)="openForm()">Register Now ↗</button>
        <button class="rainbow-btn small" (click)="openDiscordForm()">Join the PugDiff Discord ↗</button>
      </div>
      
    </section>
  `,
  styles: [`
    /* ── Hero ────────────────────────────────────────────── */
    .hero {
      min-height: 92vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px 24px;
      background:
        radial-gradient(ellipse 80% 60% at 50% 0%, rgba(134,0,125,.25) 0%, transparent 70%),
        radial-gradient(ellipse 60% 40% at 20% 80%, rgba(0,0,249,.15) 0%, transparent 60%);
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .orb {
      position: absolute;
      border-radius: 50%;
      opacity: 0.12;
      filter: blur(20px);
      pointer-events: none;
    }

    .hero-content {
      position: relative;
      z-index: 2;
    }

    .event-badge {
      display: inline-block;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: rgba(255,255,255,.6);
      margin-bottom: 24px;
      background: rgba(255,255,255,.06);
      padding: 6px 18px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,.1);
    }

    .hero-title {
      font-family: 'Black Ops One', cursive;
      font-size: clamp(56px, 12vw, 120px);
      line-height: 0.9;
      margin: 0 0 8px;
      letter-spacing: 0.02em;
      color: #fff;
    }

    .hero-sub {
      font-family: 'Black Ops One', cursive;
      font-size: clamp(40px, 9vw, 90px);
      line-height: 0.95;
      margin: 0 0 24px;
      background: linear-gradient(90deg, #FF0018, #FFA52C, #FFFF41, #008018, #0000F9, #86007D);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: 0.06em;
    }

    .hero-desc {
      font-size: clamp(16px, 2.5vw, 22px);
      color: rgba(255,255,255,.7);
      max-width: 560px;
      margin: 0 auto 40px;
      line-height: 1.6;
    }

    .hero-ctas {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* ── Section heading ──────────────────────────────────── */
    .section-heading {
      font-family: 'Black Ops One', cursive;
      font-size: clamp(28px, 5vw, 48px);
      color: #fff;
      margin-bottom: 40px;
      text-align: center;
    }

    .gradient-text.red-purple {
      background: linear-gradient(90deg, #FF0018, #86007D);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* ── Feature grid ─────────────────────────────────────── */
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 24px;
    }

    .feature-icon { font-size: 32px; margin-bottom: 12px; }

    .feature-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700;
      font-size: 18px;
      color: #fff;
      letter-spacing: 0.04em;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .feature-body {
      font-size: 15px;
      color: rgba(255,255,255,.6);
      line-height: 1.65;
    }

    /* ── Values ───────────────────────────────────────────── */
    .values-section {
      background: linear-gradient(135deg, rgba(255,0,24,.08), rgba(134,0,125,.12));
      border-top: 1px solid rgba(255,255,255,.07);
      border-bottom: 1px solid rgba(255,255,255,.07);
      padding: 80px 24px;
    }

    .values-inner {
      max-width: 780px;
      margin: 0 auto;
      text-align: center;
    }

    .values-desc {
      font-size: 16px;
      color: rgba(255,255,255,.65);
      max-width: 560px;
      margin: 0 auto 48px;
      line-height: 1.7;
    }

    .values-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
    }

    .value-tag {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: 15px;
      letter-spacing: 0.08em;
      padding: 8px 20px;
      border-radius: 999px;
      text-transform: uppercase;
    }

    /* ── Sponsors ─────────────────────────────────────────── */
    .sponsors-label {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 0.18em;
      color: rgba(255,255,255,.35);
      text-transform: uppercase;
      margin-bottom: 32px;
    }

    .sponsors-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      justify-content: center;
      align-items: center;
    }

    .sponsor-slot {
      background: rgba(255,255,255,.05);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 12px;
      padding: 16px 32px;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700;
      font-size: 18px;
      color: rgba(255,255,255,.35);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .sponsors-note {
      font-size: 14px;
      color: rgba(255,255,255,.3);
      margin-top: 20px;
    }

    /* ── Final CTA ────────────────────────────────────────── */
    .cta-section {
      text-align: center;
      padding: 80px 24px;
      background: radial-gradient(ellipse 70% 80% at 50% 50%, rgba(134,0,125,.18) 0%, transparent 70%);
    }

    .cta-heading {
      font-family: 'Black Ops One', cursive;
      font-size: clamp(28px, 5vw, 56px);
      color: #fff;
      margin-bottom: 16px;
    }

    .cta-sub {
      font-size: 18px;
      color: rgba(255,255,255,.6);
      margin-bottom: 40px;
    }
  `],
})
export class HomePageComponent {
  prideColors = PRIDE_COLORS;

  openForm() { window.open(GOOGLE_FORM_URL, '_blank'); }

  openDiscordForm() { window.open(DISCORD_INVITE_URL, '_blank'); }

  features = [
    {
      icon: '🎮',
      title: 'Stadium Mode Showdown',
      body: "We're playing Overwatch's newest competitive format — Stadium Mode. Fast-paced, high-stakes, skill-based. No prior Stadium experience required to register.",
    },
    {
      icon: '🏳️‍🌈',
      title: 'Queer-Centered Space',
      body: 'This tournament was built by and for the LGBTQ+ gaming community. Every rule, every match, every conversation happens in a space that centers queer joy and safety.',
    },
    {
      icon: '🌍',
      title: 'Open to All Skill Levels',
      body: 'From casual players to competitive veterans. All ranks are welcome. We match teams fairly so every game is worth showing up for.',
    },
    {
      icon: '🎉',
      title: 'Hosted By PugDiff',
      body: 'PugDiff is a passionate Overwatch player dedicated to making competitive play fun for everyone. He is thrilled to host the Payload Pride Cup and can’t wait to see you all in-game.',
    },
  ];

  values = [
    'Inclusivity', 'Respect', 'Anti-Harassment', 'Trans Rights',
    'Safe Spaces', 'Fun Above All', 'Community First', 'Celebrate Diversity',
  ];

  sponsors = ['Overwatch Aspirants League'];
}
