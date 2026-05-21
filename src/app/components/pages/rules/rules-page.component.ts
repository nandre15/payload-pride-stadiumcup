import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PRIDE_COLORS } from '../../../constants';

interface RuleSection {
  title: string;
  icon: string;
  color: string;
  items: string[];
}

@Component({
  selector: 'app-rules-page',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="rules-container">
      <h1 class="black-ops page-heading">
        Tournament
        <span class="gradient-text orange-yellow">Rules</span>
      </h1>
      <p class="page-sub">
        Read these carefully before registering. By participating, you agree to all rules and policies below.
      </p>

      <div class="sections-list">
        <div
          class="rule-card"
          *ngFor="let s of sections"
          [style.border-left]="'4px solid ' + s.color"
          [style.border-color]="s.color + '33'"
        >
          <div class="card-header">
            <span class="card-icon">{{ s.icon }}</span>
            <h3 class="black-ops card-title">{{ s.title }}</h3>
          </div>

          <ul class="rule-list">
            <li *ngFor="let item of s.items" class="rule-item">
              <span class="rule-bullet" [style.color]="s.color">▸</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div class="contact-box">
        <p class="contact-text">Questions about the rules? Reach our admin team in Discord</p>
      </div>
    </div>
  `,
  styles: [`
    .rules-container {
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

    .gradient-text.orange-yellow {
      background: linear-gradient(90deg, #FFA52C, #FFFF41);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .page-sub {
      font-size: 16px;
      color: rgba(255,255,255,.55);
      text-align: center;
      margin-bottom: 56px;
      line-height: 1.7;
    }

    .sections-list {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .rule-card {
      background: rgba(255,255,255,.04);
      border: 1px solid rgba(255,255,255,.09);
      border-radius: 16px;
      padding: 28px 32px;
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
    }

    .card-icon { font-size: 24px; }

    .card-title {
      font-family: 'Black Ops One', cursive;
      font-size: 22px;
      color: #fff;
      letter-spacing: 0.03em;
    }

    .rule-list {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .rule-item {
      display: flex;
      gap: 12px;
      align-items: flex-start;
      font-size: 15px;
      color: rgba(255,255,255,.75);
      line-height: 1.6;
    }

    .rule-bullet {
      flex-shrink: 0;
      margin-top: 2px;
      font-size: 18px;
    }

    .contact-box {
      margin-top: 48px;
      padding: 28px 32px;
      border-radius: 16px;
      background: linear-gradient(135deg, rgba(255,0,24,.1), rgba(134,0,125,.15));
      border: 1px solid rgba(255,255,255,.1);
      text-align: center;
    }

    .contact-text {
      font-size: 16px;
      color: rgba(255,255,255,.7);
      margin-bottom: 8px;
    }

    .contact-email {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700;
      font-size: 18px;
      color: #fff;
      letter-spacing: 0.05em;
    }
  `],
})
export class RulesPageComponent {
  sections: RuleSection[] = [
    {
      title: 'Game Format',
      icon: '🎮',
      color: PRIDE_COLORS[4],
      items: [
        'Game: Overwatch — Stadium Mode',
        'Team size: 5 players per team',
        'Match format: Group stage will be round robin one (every team will play at least 2x). The Finals will be the best of 3 quickplay style stadium matches.',
        'The top 4 teams will move on to the semi-finals. Tiebreakers will be determined by head-to-head record, then total map differential.',
        'All matches are played on the official Overwatch Stadium map pool',
        'Teams must be ready in lobby 5 minutes before their scheduled match time',
        'No hero restrictions — all heroes available in Stadium Mode are permitted',
        'Stadium Draft is the official tournament format. No hero swapping after lock-in.',
      ],
    },
    {
      title: 'Team Selection',
      icon: '🫶',
      color: PRIDE_COLORS[2],
      items: [
        'Captains will be selected from participants who opt in during registration. Captains will be chosen based on a combination of factors including rank, activity level in the community, and previous tournament experience.',
        'Randomizer team selection will be used. A week prior to the tournament. We will stream team selection. All participants will be added to a wheel. We will spin the wheel once for each team slot, and assign players to teams in the order they are drawn.',
      ],
    },
    {
      title: 'Eligibility',
      icon: '✅',
      color: PRIDE_COLORS[3],
      items: [
        'Open to all players 18 years of age or older',
        'Players of all ranks and skill levels are welcome to participate',
        'Each player may only be rostered on one team',
        'All players must have a valid Overwatch Battle.net account in good standing',
        'Registration deadline: June 12th, 2026 at 11:59 PM UTC',
      ],
    },
    {
      title: 'Match Rules',
      icon: '⚔️',
      color: PRIDE_COLORS[1],
      items: [
        'A forfeit will be issued after a 10-minute no-show with no communication',
        'Disconnections: the match continues unless both teams agree to a pause (max 5 min per match)',
        'Spectator slots may be used by tournament admins for recording and officiating',
        'In-game settings must remain at default for the duration of the match',
        'All disputes must be reported to a tournament admin within 10 minutes of match completion',
      ],
    },
    {
      title: 'Code of Conduct',
      icon: '🏳️‍🌈',
      color: PRIDE_COLORS[5],
      items: [
        'All participants must treat one another with dignity and respect at all times',
        'Hate speech of any kind — including homophobia, transphobia, racism, ableism, and misogyny — is grounds for immediate disqualification and permanent ban',
        'Deadnaming or misgendering any participant is strictly prohibited',
        'Trash talk and competitive banter is fine; targeted harassment is not',
        'Respect all pronouns. If you\'re unsure, use they/them or ask politely',
        'This event is a safe space — if you see something, say something to an admin',
      ],
    },
    {
      title: 'Anti-Harassment Policy',
      icon: '🛡️',
      color: PRIDE_COLORS[0],
      items: [
        'Zero tolerance for harassment of any kind — in-game, in Discord, in stream chat, or in any event-adjacent space',
        'Harassment includes but is not limited to: slurs, threats, doxxing, sexual harassment, and sustained targeted behavior',
        'Reports can be made anonymously via the report form in our Discord server',
        'All reports are reviewed by a dedicated moderation team within 24 hours',
        'Confirmed violations result in disqualification, removal from the community, and a report to Blizzard if applicable',
        'Bystanders are encouraged to report incidents even if the targeted person does not',
      ],
    },
  ];
}
