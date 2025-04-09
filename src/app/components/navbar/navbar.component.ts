import { NgFor, NgIf, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, RouterModule],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ height: 0, opacity: 0, overflow: 'hidden' }),
        animate('200ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1, overflow: 'hidden' }),
        animate('200ms ease-in', style({ height: 0, opacity: 0 }))
      ])
    ])
  ],
  template: `
    <nav class="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
      <div class="d-flex align-items-center">
        <div class="square me-2"></div>
        <h5 class="mb-0 fw-bold">Chris Chiu <span class="text-muted fs-6 d-none d-sm-inline">/ SOFTWARE ENGINEER</span></h5>
      </div>

      <!-- 桌面版導航欄 -->
      <ul class="nav d-none d-md-flex">
        <li class="nav-item" *ngFor="let item of navItems">
          <a
            class="nav-link fw-semibold"
            [routerLink]="item.path"
            routerLinkActive="text-primary"
            [routerLinkActiveOptions]="{ exact: true }">
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- 移動版漢堡菜單按鈕 -->
      <button class="navbar-toggler d-md-none" type="button" (click)="toggleMenu()">
        <i class="bi" [ngClass]="isMenuOpen ? 'bi-x-lg' : 'bi-list'"></i>
      </button>
    </nav>

    <!-- 移動版下拉菜單 -->
    <div class="mobile-menu" *ngIf="isMenuOpen" [@slideDown]>
      <ul class="nav flex-column">
        <li class="nav-item" *ngFor="let item of navItems">
          <a
            class="nav-link fw-semibold py-2"
            [routerLink]="item.path"
            routerLinkActive="text-primary"
            [routerLinkActiveOptions]="{ exact: true }"
            (click)="closeMenu()">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .square {
      width: 12px;
      height: 12px;
      background-color: blue;
    }
    .nav-link {
      color: black;
    }
    .nav-link:hover {
      color: blue;
    }

    /* 漢堡菜單按鈕樣式 */
    .navbar-toggler {
      border: none;
      background: transparent;
      font-size: 1.5rem;
      padding: 0;
      cursor: pointer;
    }

    /* 下拉菜單樣式 */
    .mobile-menu {
      background-color: white;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }

    /* 確保移動版導航項目有足夠的點擊區域 */
    .mobile-menu .nav-link {
      padding: 12px 16px;
      margin: 4px 0;
      transition: background-color 0.2s;
    }

    .mobile-menu .nav-link:hover {
      background-color: rgba(0,0,0,0.03);
    }
  `]
})
export class NavbarComponent {
  isMenuOpen = false;

  // 切換菜單顯示狀態
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // 關閉菜單
  closeMenu() {
    this.isMenuOpen = false;
  }

  navItems = [
    { label: 'About Me', path: '/aboutme' },
    { label: 'Resume', path: '/resume' },
    { label: 'Projects', path: '/projects' },
    { label: 'Achievements', path: '/achievements' }
  ];
}
