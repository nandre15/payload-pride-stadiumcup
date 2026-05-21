import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NAV_LINKS, PRIDE_COLORS } from '../../constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, RouterLink],
  template: `
    <footer class="footer">
      <!-- Logo -->
      <div class="logo">
        <div class="logo-orb">⊕</div>
        <div>
          <div class="logo-title black-ops">PAYLOAD</div>
          <div class="logo-sub black-ops">PRIDE CUP</div>
        </div>
      </div>

      <!-- Nav links -->
      <div class="footer-links">
        <a
          class="footer-link condensed"
          *ngFor="let link of navLinks"
          [routerLink]="link === 'Home' ? '/home' : '/' + link.toLowerCase()"
        >{{ link }}</a>
      </div>

      <!-- Pride bar -->
      <div class="pride-bar">
        <span *ngFor="let c of prideColors" [style.background]="c"></span>
      </div>

      <p class="copyright">
        © 2025 Payload Pride Cup · Made with 🏳️‍🌈 for the queer gaming community
      </p>
    </footer>
  `,
  styles: [`
    .footer {
      border-top: 1px solid rgba(255,255,255,.08);
      padding: 48px 24px 32px;
      text-align: center;
    }

    .logo {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 24px;
    }

    .logo-orb {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: linear-gradient(135deg, #FF0018 0%, #FFA52C 20%, #FFFF41 40%, #008018 60%, #0000F9 80%, #86007D 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: #fff;
      font-family: 'Black Ops One', cursive;
    }

    .logo-title {
      font-family: 'Black Ops One', cursive;
      font-size: 18px;
      color: #fff;
      letter-spacing: 0.04em;
      line-height: 1;
      text-align: left;
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

    .footer-links {
      display: flex;
      gap: 24px;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 24px;
    }

    .footer-link {
      background: none;
      border: none;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.1em;
      color: rgba(255,255,255,.4);
      text-transform: uppercase;
    }

    .pride-bar {
      display: flex;
      height: 5px;
      width: 100%;
    }

    .pride-bar span { flex: 1; }

    .copyright {
      font-size: 13px;
      color: rgba(255,255,255,.25);
      margin-top: 16px;
    }
  `],
})
export class FooterComponent {
  prideColors = PRIDE_COLORS;
  navLinks = NAV_LINKS;
}
