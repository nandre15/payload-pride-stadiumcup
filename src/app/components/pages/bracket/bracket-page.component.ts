import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { GROUP_STAGE_ROUNDS, OAL_TWITCH_URL, TEAM_NAMES } from '../../../constants';

interface GroupRound {
  name: string;
  matches: readonly (readonly [string, string])[];
  streamedMatchIndex: number;
  winners: readonly string[];
}

interface BracketMatch {
  title: string;
  mode: string;
  teams: string[];
}

@Component({
  selector: 'app-bracket-page',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="bracket-container">
      <h1 class="black-ops page-heading">
        Tournament
        <span class="gradient-text orange-blue">Bracket</span>
      </h1>
      <p class="page-sub">
        Group stage is a single Quick Play Stadium match with draft picks. Top 4 teams advance.
      </p>

      <section class="bracket-board">
        <div class="group-stage">
          <div class="group-stage-header">
            <div class="section-kicker condensed">Group Stage</div>
            <p class="stream-note condensed">Matches in purple will be streamed.</p>
          </div>
          <div class="round-grid">
            <article class="round-card" *ngFor="let round of groupRounds">
              <div class="round-header">
                <h2 class="condensed">{{ round.name }}</h2>
                <div class="winner-summary">
                  <span *ngFor="let winner of round.winners; let i = index">
                    Winner {{ i + 1 }}: {{ winner }}
                  </span>
                </div>
              </div>

              <div class="match-list">
                <div
                  class="match-row"
                  [class.streamed-match]="round.streamedMatchIndex === i"
                  [attr.role]="round.streamedMatchIndex === i ? 'link' : null"
                  [attr.tabindex]="round.streamedMatchIndex === i ? 0 : null"
                  (click)="openStream(round.streamedMatchIndex === i)"
                  (keydown.enter)="openStream(round.streamedMatchIndex === i)"
                  *ngFor="let match of round.matches; let i = index"
                >
                  <span>{{ match[0] }}</span>
                  <strong>VS</strong>
                  <span>{{ match[1] }}</span>
                </div>
              </div>
            </article>
          </div>
        </div>

        <section class="standings-panel">
          <div class="section-kicker condensed">Group Standings</div>
          <div class="standings-grid">
            <article class="standing-card" *ngFor="let team of standings">
              <span class="team-name condensed">{{ team.name }}</span>
              <strong>{{ team.wins }}</strong>
              <span class="wins-label condensed">{{ team.wins === 1 ? 'Round Won' : 'Rounds Won' }}</span>
            </article>
          </div>
        </section>

        <div class="advance-strip condensed">Top 4 Teams Advance To Semi-Finals</div>

        <div class="elimination-stage">
          <div class="bracket-column">
            <div class="section-kicker condensed">Semi-Finals</div>
            <article class="elim-card" *ngFor="let match of semiFinals">
              <div class="match-meta">
                <h2 class="condensed">{{ match.title }}</h2>
                <p>{{ match.mode }}</p>
              </div>
              <div class="team-slot" *ngFor="let team of match.teams">{{ team }}</div>
            </article>
          </div>

          <div class="connector" aria-hidden="true">
            <span></span>
          </div>

          <div class="bracket-column finals-column">
            <div class="section-kicker condensed">Finals</div>
            <article class="elim-card final-card" *ngFor="let match of finals">
              <div class="match-meta">
                <h2 class="condensed">{{ match.title }}</h2>
                <p>{{ match.mode }}</p>
              </div>
              <div class="team-slot" *ngFor="let team of match.teams">{{ team }}</div>
            </article>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .bracket-container {
      max-width: 1180px;
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

    .gradient-text.orange-blue {
      background: linear-gradient(90deg, #FFA52C, #008018, #0000F9);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .page-sub {
      max-width: 700px;
      margin: 0 auto 44px;
      color: rgba(255,255,255,.58);
      font-size: 16px;
      line-height: 1.7;
      text-align: center;
    }

    .bracket-board {
      display: grid;
      gap: 28px;
    }

    .section-kicker {
      color: rgba(255,255,255,.45);
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: .16em;
      margin-bottom: 14px;
      text-transform: uppercase;
    }

    .group-stage-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 14px;
    }

    .group-stage-header .section-kicker {
      margin-bottom: 0;
    }

    .stream-note {
      color: rgba(255,255,255,.62);
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: .12em;
      margin: 0;
      text-align: right;
      text-transform: uppercase;
    }

    .round-grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(170px, 1fr));
      gap: 12px;
    }

    .round-card,
    .elim-card {
      background: rgba(255,255,255,.045);
      border: 1px solid rgba(255,255,255,.1);
      border-radius: 8px;
      overflow: hidden;
    }

    .round-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      min-height: 58px;
      padding: 14px;
      background: rgba(255,255,255,.065);
      border-bottom: 1px solid rgba(255,255,255,.08);
    }

    .round-header h2,
    .match-meta h2 {
      color: #fff;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 22px;
      line-height: 1;
      margin: 0;
      text-transform: uppercase;
    }

    .winner-summary {
      display: grid;
      gap: 3px;
      text-align: right;
    }

    .winner-summary span {
      color: rgba(255,255,255,.48);
      font-size: 12px;
      font-weight: 700;
      line-height: 1.1;
      text-transform: uppercase;
    }

    .match-list {
      display: grid;
      gap: 10px;
      padding: 14px;
    }

    .match-row {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 8px;
      min-height: 44px;
      padding: 9px 10px;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 6px;
      color: #fff;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 17px;
      font-weight: 700;
      line-height: 1.05;
      text-align: center;
    }

    .match-row strong {
      color: #FFA52C;
      font-size: 11px;
      letter-spacing: .1em;
    }

    .match-row.streamed-match {
      background: #9146FF;
      border-color: rgba(255,255,255,.3);
      box-shadow: 0 0 0 1px rgba(145,70,255,.25), 0 10px 24px rgba(145,70,255,.22);
      cursor: pointer;
    }

    .match-row.streamed-match strong {
      color: #fff;
    }

    .match-row.streamed-match:hover,
    .match-row.streamed-match:focus-visible {
      outline: 2px solid rgba(255,255,255,.78);
      outline-offset: 2px;
    }

    .advance-strip {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 48px;
      background:
        linear-gradient(rgba(8,4,20,.9), rgba(8,4,20,.9)) padding-box,
        linear-gradient(90deg, #FF0018, #FFA52C, #FFFF41, #008018, #0000F9, #86007D) border-box;
      border: 1px solid transparent;
      border-radius: 8px;
      color: #fff;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: .1em;
      text-align: center;
      text-transform: uppercase;
    }

    .standings-panel {
      background: rgba(255,255,255,.035);
      border: 1px solid rgba(255,255,255,.09);
      border-radius: 8px;
      padding: 18px;
    }

    .standings-grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(130px, 1fr));
      gap: 10px;
    }

    .standing-card {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-areas:
        "team wins"
        "label wins";
      align-items: center;
      min-height: 76px;
      gap: 4px 12px;
      padding: 14px;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 6px;
    }

    .team-name {
      grid-area: team;
      color: #fff;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 20px;
      font-weight: 700;
      line-height: 1;
      text-transform: uppercase;
    }

    .standing-card strong {
      grid-area: wins;
      color: #FFA52C;
      font-family: 'Black Ops One', cursive;
      font-size: 36px;
      line-height: 1;
    }

    .wins-label {
      grid-area: label;
      color: rgba(255,255,255,.48);
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    .elimination-stage {
      display: grid;
      grid-template-columns: minmax(260px, 1fr) 80px minmax(260px, .9fr);
      align-items: center;
      gap: 12px;
    }

    .bracket-column {
      display: grid;
      gap: 16px;
    }

    .match-meta {
      padding: 16px;
      background: rgba(255,255,255,.065);
      border-bottom: 1px solid rgba(255,255,255,.08);
    }

    .match-meta p {
      color: rgba(255,255,255,.5);
      font-size: 13px;
      line-height: 1.4;
      margin: 6px 0 0;
    }

    .team-slot {
      min-height: 48px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      color: #fff;
      border-bottom: 1px solid rgba(255,255,255,.06);
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .team-slot:last-child {
      border-bottom: 0;
    }

    .connector {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 260px;
      position: relative;
    }

    .connector::before,
    .connector::after {
      content: '';
      position: absolute;
      left: 16px;
      right: 16px;
      height: 1px;
      background: rgba(255,165,44,.5);
    }

    .connector::before {
      top: 72px;
    }

    .connector::after {
      bottom: 72px;
    }

    .connector span {
      width: 1px;
      height: 146px;
      background: rgba(255,165,44,.5);
    }

    .final-card {
      background:
        linear-gradient(rgba(255,255,255,.05), rgba(255,255,255,.05)) padding-box,
        linear-gradient(135deg, #FFA52C, #008018, #0000F9) border-box;
      border: 1px solid transparent;
    }

    @media (max-width: 980px) {
      .round-grid {
        grid-template-columns: repeat(2, minmax(220px, 1fr));
      }

      .standings-grid {
        grid-template-columns: repeat(2, minmax(180px, 1fr));
      }

      .elimination-stage {
        grid-template-columns: 1fr;
      }

      .connector {
        min-height: 38px;
      }

      .connector::before,
      .connector::after {
        display: none;
      }

      .connector span {
        width: 1px;
        height: 38px;
      }
    }

    @media (max-width: 560px) {
      .bracket-container {
        padding: 48px 16px;
      }

      .group-stage-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .stream-note {
        text-align: left;
      }

      .round-grid {
        grid-template-columns: 1fr;
      }

      .standings-grid {
        grid-template-columns: 1fr;
      }

      .match-row {
        font-size: 16px;
      }
    }
  `],
})
export class BracketPageComponent {
  readonly teams = TEAM_NAMES;

  groupRounds: readonly GroupRound[] = GROUP_STAGE_ROUNDS;

  semiFinals: BracketMatch[] = [
    {
      title: 'Semi-Final 1',
      mode: 'Single Comp Style Stadium Match',
      teams: ['TBD 1', 'TBD 2'],
    },
    {
      title: 'Semi-Final 2',
      mode: 'Single Comp Style Stadium Match',
      teams: ['TBD 3', 'TBD 5'],
    },
  ];

  finals: BracketMatch[] = [
    {
      title: 'Finals',
      mode: 'BO3 Stadium QP Matches with draft picks',
      teams: ['TBD 1', 'TBD 2'],
    },
  ];

  get standings() {
    return this.teams.map(name => ({
      name,
      wins: this.groupRounds.flatMap(round => round.winners).filter(winner => winner === name).length,
    }));
  }

  openStream(isStreamedMatch: boolean): void {
    if (isStreamedMatch) {
      window.open(OAL_TWITCH_URL, '_blank', 'noopener,noreferrer');
    }
  }
}
