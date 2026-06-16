import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINKS, PRIDE_COLORS, GOOGLE_FORM_URL } from '../../constants';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
  template: `
    <nav class="nav">
      <div class="pride-bar">
        <span *ngFor="let c of prideColors" [style.background]="c"></span>
      </div>

      <div class="nav-inner">
        <!-- Logo -->
        <a class="logo-btn" [routerLink]="['/home']">
          <div class="logo-orb">⊕</div>
          <div class="logo-text">
            <div class="logo-title">PAYLOAD</div>
            <div class="logo-sub">PRIDE CUP</div>
          </div>
        </a>

        <!-- Links -->
        <div class="nav-links">
          <a
            *ngFor="let link of navLinks"
            class="nav-link"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            [routerLink]="getLinkPath(link)"
          >{{ link }}</a>

          <button class="register-btn" (click)="openForm()">Register ↗</button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .nav {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(8, 4, 20, 0.92);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .pride-bar {
      display: flex;
      height: 5px;
    }

    .pride-bar span {
      flex: 1;
    }

    .nav-inner {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
    }

    .logo-btn {
      background: none;
      border: none;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 0;
    }

    .logo-orb {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: linear-gradient(135deg, #FF0018 0%, #FFA52C 20%, #FFFF41 40%, #008018 60%, #0000F9 80%, #86007D 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 18px;
      color: #fff;
      font-family: 'Black Ops One', cursive;
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.15);
    }

    .logo-title {
      font-family: 'Black Ops One', cursive;
      font-size: 18px;
      letter-spacing: 0.04em;
      color: #fff;
      line-height: 1;
    }

    .logo-sub {
      font-family: 'Black Ops One', cursive;
      font-size: 11px;
      letter-spacing: 0.15em;
      background: linear-gradient(90deg, #FF0018, #FFA52C, #FFFF41, #008018, #0000F9, #86007D);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1;
      margin-top: 2px;
    }

    .nav-links {
      display: flex;
      gap: 6px;
      align-items: center;
    }

    .nav-link {
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.6);
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: 15px;
      letter-spacing: 0.08em;
      padding: 8px 16px;
      border-radius: 8px;
      text-transform: uppercase;
      transition: all 0.2s;
    }

    .nav-link.active,
    .nav-link:hover {
      background: rgba(255, 255, 255, 0.12);
      color: #fff;
    }

    .register-btn {
      margin-left: 8px;
      background: linear-gradient(135deg, #FF0018, #86007D);
      border: none;
      color: #fff;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700;
      font-size: 15px;
      letter-spacing: 0.08em;
      padding: 8px 20px;
      border-radius: 8px;
      text-transform: uppercase;
    }

    @media (max-width: 760px) {
      .nav-inner {
        height: auto;
        min-height: 64px;
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;
        padding: 10px 16px 12px;
      }

      .nav-links {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
      }

      .nav-link {
        font-size: 14px;
        padding: 7px 10px;
      }

      .register-btn {
        margin-left: 0;
        padding: 7px 12px;
      }
    }
  `],
})
export class NavComponent {
  prideColors = PRIDE_COLORS;
  navLinks = NAV_LINKS;

  getLinkPath(link: string) {
    return link === 'Home' ? '/home' : '/' + link.toLowerCase();
  }

  openForm() {
    window.open(GOOGLE_FORM_URL, '_blank');
  }
}
