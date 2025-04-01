import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor,RouterModule],
  template: `
    <nav class="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
      <div class="d-flex align-items-center">
        <div class="square me-2"></div>
        <h5 class="mb-0 fw-bold">Chris Chiu <span class="text-muted fs-6">/ SOFTWARE ENGINEER</span></h5>
      </div>
      <ul class="nav">
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
    </nav>
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
  `]
})
export class NavbarComponent {
  navItems = [
    { label: 'About Me', path: '' },
    { label: 'Resume', path: 'resume' },
    { label: 'Projects', path: 'projects' },
    { label: 'Achievements', path: 'achievements' }
  ];
}
