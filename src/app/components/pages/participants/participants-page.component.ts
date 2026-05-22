import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { PRIDE_COLORS } from '../../../constants';

interface Participant {
  name: string;
  team: string | 'TBD';
  pronouns?: string;
  twitch?: string;
}

@Component({
  selector: 'app-participants-page',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <div class="participants-container">
      <h1 class="black-ops page-heading">
        Tournament
        <span class="gradient-text purple-pink">Participants</span>
      </h1>
      <p class="page-sub">
        Meet the teams competing in the Payload Pride Stadium Cup. Teams are still being formed!
      </p>

      <div class="participants-list" *ngIf="participants.length > 0; else noParticipants">
        <div class="participant-card" *ngFor="let p of participants; let i = index">
          <div class="participant-header">
            <div class="participant-info">
              <div class="participant-name">{{ p.name }}</div>
              <div class="participant-pronouns" *ngIf="p.pronouns">{{ p.pronouns }}</div>
              <div class="participant-twitch" *ngIf="p.twitch">
                <a [href]="p.twitch" target="_blank" rel="noopener noreferrer">
                  Twitch
                </a>
              </div>
            </div>
          </div>
          <div class="participant-team" [class.tbd]="p.team === 'TBD'">
            <span class="team-label">Team:</span>
            <span class="team-value">{{ p.team }}</span>
          </div>
        </div>
      </div>

      <ng-template #noParticipants>
        <div class="empty-state">
          <div class="empty-icon">👥</div>
          <p class="empty-text">Participant list coming soon!</p>
          <p class="empty-sub">Check back after registrations close on June 12th</p>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .participants-container {
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

    .gradient-text.purple-pink {
      background: linear-gradient(90deg, #86007D, #FF0018);
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

    .participants-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 24px;
    }

    .participant-card {
      background: rgba(255,255,255,.04);
      border: 1px solid rgba(255,255,255,.09);
      border-radius: 16px;
      padding: 24px;
      transition: all 0.2s ease;
    }

    .participant-card:hover {
      background: rgba(255,255,255,.06);
      border-color: rgba(255,255,255,.15);
      transform: translateY(-2px);
    }

    .participant-header {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
      align-items: flex-start;
    }

    .participant-number {
      font-family: 'Black Ops One', cursive;
      font-size: 24px;
      background: linear-gradient(135deg, #FF0018, #86007D);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      min-width: 30px;
      text-align: center;
      line-height: 1;
    }

    .participant-info {
      flex: 1;
    }

    .participant-name {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700;
      font-size: 18px;
      color: #fff;
      letter-spacing: 0.03em;
      margin-bottom: 4px;
    }

    .participant-pronouns {
      font-size: 12px;
      color: rgba(255,255,255,.5);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .participant-team {
      display: flex;
      gap: 8px;
      align-items: center;
      font-size: 14px;
    }

    .participant-team.tbd {
      color: rgba(255,255,255,.5);
    }

    .team-label {
      color: rgba(255,255,255,.55);
      font-weight: 600;
    }

    .team-value {
      color: #fff;
      font-weight: 700;
    }

    .team-value {
      background: rgba(255,255,255,.08);
      padding: 4px 12px;
      border-radius: 6px;
      font-family: 'Barlow Condensed', sans-serif;
    }

    .empty-state {
      text-align: center;
      padding: 80px 24px;
    }

    .empty-icon {
      font-size: 64px;
      margin-bottom: 24px;
    }

    .empty-text {
      font-family: 'Black Ops One', cursive;
      font-size: 24px;
      color: #fff;
      margin-bottom: 8px;
    }

    .empty-sub {
      font-size: 16px;
      color: rgba(255,255,255,.55);
    }
  `],
})
export class ParticipantsPageComponent {
  participants: Participant[] = [
     //{ name: 'PugDiff', team: 'TBD', pronouns: 'they/them', twitch: 'https://www.twitch.tv/pugdiff' },
    // Add participants here
  ];
}
