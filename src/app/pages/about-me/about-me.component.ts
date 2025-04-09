import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="wrapper position-relative overflow-hidden">
      <!-- 背景切割層 -->
      <div class="background position-absolute top-0 start-0 w-100 h-100 d-flex">
        <div class="bg-beige"></div>
        <div class="bg-white"></div>
      </div>

      <!-- 實體內容容器，需扣除 navbar 高度 -->
      <div class="content position-relative d-flex justify-content-center align-items-center p-3 p-md-4">
        <div class="main-container d-flex flex-column flex-md-row align-items-center gap-md-4 gap-3">

          <!-- 左卡片 -->
          <div class="profile-card card shadow text-center p-3 p-md-4">
            <img src="assets/images/my-photo.jpg" class="profile-image rounded-circle mx-auto mb-3" alt="Chris Chiu" />
            <h5 class="fw-bold mb-0">Chris Chiu</h5>
            <div class="underline mx-auto my-2"></div>
            <p class="text-uppercase text-muted mb-1">Software Engineer</p>
            <p class="email-link mb-3">
              <i class="bi bi-envelope me-1"></i> {{email}}
            </p>
            <div class="social-links">
              <a href="https://github.com/ChrisChiu0614" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="GitHub">
                <i class="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/chien-hsiang-chiu-1137aa1a4/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/sean820614/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram">
                <i class="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          <!-- 右側內容 -->
          <div class="bio-content text-md-start text-center">
            <h1 class="fw-bold mb-2">Hello!</h1>
            <h5 class="mb-4">I'm Chris, a Full-Stack Developer</h5>
            <div class="cta-buttons mb-4">
              <button class="btn btn-primary me-2 mb-2 mb-md-0 px-4" (click)="goResume()">
                <i class="bi bi-file-earmark-text me-1"></i> RESUME
              </button>
              <button class="btn btn-outline-dark px-4" (click)="goProjects()">
                <i class="bi bi-code-square me-1"></i> PROJECTS
              </button>
            </div>
            <div class="bio-text">
              <p>
                I am a skilled software engineer with two years of experience in software development. My primary programming language is Java, and I also have a solid understanding of C, C++, Python, and JavaScript.
              </p>
              <p>
                I specialize in web application development using <span class="highlight">Angular</span>, <span class="highlight">Spring Boot</span>, and <span class="highlight">RESTful APIs</span>. I'm passionate about building scalable and maintainable software solutions.
              </p>
              <p class="d-none d-sm-block">
                I am a confident and approachable individual who enjoys challenges and has a strong habit of continuous self-improvement. My goal is to grow into a professional who can make a meaningful impact through innovative technology solutions.
              </p>
              <p class="d-sm-none">
                I enjoy challenges and continuously self-improve. My goal is to make a meaningful impact through innovative technology solutions.
              </p>
              <p class="mb-0">
                Currently, I'm exploring cloud technologies and microservices architecture to enhance my full-stack development capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* 背景樣式 */
    .bg-beige {
      background-color: #f2e6d9;
      flex: 0 0 30%;
    }
    .bg-white {
      flex: 0 0 70%;
    }
    .wrapper {
      position: relative;
      width: 100%;
    }
    .background {
      z-index: 0;
    }
    .content {
      z-index: 1;
      min-height: calc(100vh - 70px);
      box-sizing: border-box;
      width: 100%;
    }
    
    /* 容器樣式 */
    .main-container {
      max-width: 1100px;
      width: 100%;
    }
    
    /* 個人資料卡片樣式 */
    .profile-card {
      width: 100%;
      max-width: 350px;
      background-color: #F5ECE6;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .profile-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15) !important;
    }
    .profile-image {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border: 4px solid white;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    .underline {
      width: 40px;
      height: 3px;
      background-color: #4169E1;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .email-link {
      color: #555;
      font-size: 0.9rem;
    }
    
    /* 社交媒體連結樣式 */
    .social-links {
      border-top: 1px solid #eee;
      padding-top: 15px;
      margin-top: 15px;
      display: flex;
      justify-content: center;
      gap: 16px;
      background-color: white;
      border-radius: 8px;
    }
    .social-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      color: #333;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      background-color: #f8f9fa;
    }
    .social-icon:hover {
      background-color: #e9ecef;
      color: #4169E1;
      transform: translateY(-3px);
    }
    
    /* 個人介紹內容樣式 */
    .bio-content {
      flex: 1;
      max-width: 650px;
      overflow-wrap: break-word;
    }
    .bio-text p {
      line-height: 1.6;
      margin-bottom: 0.75rem;
      color: #333;
    }
    .highlight {
      font-weight: 600;
      color: #4169E1;
    }
    
    /* 按鈕樣式 */
    .btn-primary {
      background-color: #4169E1;
      border-color: #4169E1;
      transition: all 0.3s ease;
    }
    .btn-primary:hover {
      background-color: #3658D6;
      border-color: #3658D6;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(65, 105, 225, 0.3);
    }
    .btn-outline-dark:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    /* 響應式設計 */
    @media (max-width: 767px) {
      .profile-card {
        margin-bottom: 0.5rem;
        max-width: 290px;
      }
      .profile-image {
        width: 100px;
        height: 100px;
      }
      .bio-text p {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }
      .content {
        padding: 1.5rem 1rem;
      }
      .social-icon {
        width: 32px;
        height: 32px;
        font-size: 1rem;
      }
    }
    
    @media (max-width: 575px) {
      .content {
        padding: 1rem;
      }
      .profile-card {
        padding: 0.75rem !important;
      }
      h1 {
        font-size: 1.75rem;
      }
      h5 {
        font-size: 1.1rem;
      }
      .profile-image {
        width: 80px;
        height: 80px;
        margin-bottom: 0.5rem !important;
      }
      .bio-content {
        padding: 0 0.5rem;
      }
    }
    
    /* 橫屏模式的手機 */
    @media (max-height: 500px) and (orientation: landscape) {
      .content {
        padding: 1rem;
        height: auto;
      }
      .profile-image {
        width: 70px;
        height: 70px;
      }
      .profile-card {
        max-width: 250px;
      }
      .bio-text p {
        margin-bottom: 0.3rem;
      }
    }
  `]
})
export class AboutMeComponent {
  private router = inject(Router);

  goResume() {
    this.router.navigate(['/resume']);
  }

  goProjects() {
    this.router.navigate(['/projects']);
  }

  email = 'chris820614@gmail.com';
}
