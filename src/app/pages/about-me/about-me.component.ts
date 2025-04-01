import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  template: `
    <div class="wrapper position-relative overflow-hidden">
      <!-- 背景切割層 -->
      <div class="background position-absolute top-0 start-0 w-100 h-100 d-flex">
        <div class="bg-beige" style="flex: 0 0 30%;"></div>
        <div class="bg-white" style="flex: 0 0 70%;"></div>
      </div>

      <!-- 實體內容容器，需扣除 navbar 高度 -->
      <div class="content position-relative d-flex justify-content-center align-items-center px-4"
           style="height: calc(100vh - 70px);">
        <div class="d-flex flex-column flex-md-row align-items-center gap-3" style="max-width: 1100px; width: 100%;">

          <!-- 左卡片 -->
          <div class="card shadow text-center p-4" style="width: 40rem; background-color: #F5ECE6;">
            <img src="assets/images/my-photo.jpg" class="rounded-circle mx-auto mb-3" style="width: 140px; height: 140px;" />
            <h5 class="fw-bold mb-0">Chris Chiu</h5>
            <div class="underline mx-auto my-2"></div>
            <p class="text-uppercase text-muted mb-0">Software Engineer</p>
            <i class="bi bi-envelope me-2"> {{email}}</i>
            <div class="border-top pt-3 mt-3 d-flex justify-content-center gap-3 bg-white mt-4 pt-3">
            <a href="https://github.com/ChrisChiu0614" target="_blank" class="text-dark fs-5">
              <i class="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/chien-hsiang-chiu-1137aa1a4/" target="_blank" class="text-dark fs-5">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/sean820614/" target="_blank" class="text-dark fs-5">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
          </div>

          <!-- 右側內容 -->
          <div class="text-md-start text-center">
            <h1 class="fw-bold">Hello</h1>
            <h5 class="mb-4">I'm Chris and a Web Developer </h5>
            <div class="mb-4">
              <button class="btn btn-primary me-2 mb-2 mb-md-0" (click)="goResume()">RESUME</button>
              <button class="btn btn-outline-dark" (click)="goProjects()" >PROJECTS</button>
            </div>
            <p>
            I am a skilled software engineer withtwo years of experiencein software development. My primary programming language is Java, and I also have a solid understanding of C, C++, and Python.
            </p>
            <p>
            I am a confident and approachable individual who enjoyschallenges and has a strong habit of continuous self-improvement. My goal is to grow into a professional who can make a meaningful impact and help others through my expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .bg-beige {
      background-color: #f2e6d9;
    }
    .underline {
      width: 40px;
      height: 3px;
      background-color: blue;
    }
    .wrapper {
      position: relative;
    }
    .background {
      z-index: 0;
    }
    .content {
      z-index: 1;
    }
  `]
})
export class AboutMeComponent {
  private router = inject(Router);

  goResume(){
    this.router.navigate(['/resume']);
  }

  goProjects(){
    this.router.navigate(['/projects']);
  }

  email = `chris820614@gmail.com`

}
