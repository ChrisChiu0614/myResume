import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="bg-khaki py-5 px-3 px-md-5">
      <!-- 上方 Resume 標題列 -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold mb-0">
          <span class="square me-2"></span>Resume
        </h2>
        <button class="btn btn-primary">DOWNLOAD CV</button>
      </div>

      <!-- Experience 區塊 -->
      <h5 class="fw-bold mb-3">Experience</h5>
      <div class="mb-5">
        <div class="card resume-card mb-4 p-4" *ngFor="let item of experienceList">
          <div class="row">
            <div class="col-md-4 fw-bold text-primary">{{ item.date }}</div>
            <div class="col-md-8">
              <div class="fw-bold">{{ item.title }}</div>
              <div class="text-muted small">{{ item.company }}</div>
              <div class="text-muted small mb-2">{{ item.location }}</div>
              <ul class="mb-0">
                <li *ngFor="let des of item.description">{{ des }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Education 區塊 -->
      <h5 class="fw-bold mb-3">Education</h5>
      <div class="mb-5">
        <div class="card resume-card mb-4 p-4" *ngFor="let item of educationList">
          <div class="row">
            <div class="col-md-4 fw-bold text-primary">{{ item.date }}</div>
            <div class="col-md-8">
              <div class="fw-bold">{{ item.school }}</div>
              <div class="text-muted small">{{ item.major }}</div>
              <div class="text-muted small">{{ item.degree }}</div>
              <div class="text-muted small mb-2">{{ item.location }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <h5 class="fw-bold mb-3">Professional skills</h5>
      <div class="mb-5">
        <div class="card resume-card mb-4 p-4" *ngFor="let group of skills">
          <div class="row">
            <div class="col-md-4 fw-bold text-primary">{{ group.category }}</div>
            <div class="col-md-8">
            <ul class="col-6 col-md-3 mb-2" *ngFor="let skill of group.items">
               <li class="square me-2"></li>{{ skill }}
            </ul>
            </div>
          </div>
        </div>
      </div>


      <!-- Languages -->
      <h5 class="fw-bold mb-3">Languages</h5>
      <div class="card resume-card p-4 mb-4">
        <div class="row">
          <div class="col-6 col-md-3 mb-2" *ngFor="let lang of languages">
            <span class="square me-2"></span>{{ lang }}
          </div>
        </div>
      </div>

  `,
  styles: [`
    .bg-khaki {
      background-color: #f2e6d9;
    }
    .square {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: blue;
    }
    .resume-card {
      background-color: white;
      border: none;
      box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    }
  `]
})
export class ResumeComponent {
  experienceList:any = [
    {
      date: '2025 – Present',
      title: 'Senior Software Engineer',
      company: '緯創軟體(WITS)',
      location: 'Hsinchu',
      description: [
        'Client Site: TSMC Fab 12P7 (on-site support)',
        'Upgraded Spring Boot applications from 2.x to 3.x.',
        'Wrote test cases with JUnit 5 for backend services',
        'Migrated legacy Java EE applications to Spring Boot.'
      ]
    },
    {
      date: '2023 – 2025',
      title: 'Software Engineer',
      company: '敦陽科技股份有限公司(Stark Technology Inc.)',
      location: 'Hsinchu',
      description: [
        '參與系統分析與需求規劃',
        '主導前端模組開發，提升使用者體驗',
        '與跨部門團隊協作，整合第三方 API'
      ]
    }
  ];

  educationList = [
    {
      date: '2020 – 2022',
      school: '中原大學 Chung Yuan Christian University',
      degree: 'Master',
      location: 'Taoyuan',
      major: 'Information Management'
    },
    {
      date: '2011 – 2015',
      school: '明新科技大學 Minghsin University of Science and Technology',
      degree: 'Bachelor',
      location: 'Hsinchu',
      major: 'Electronics Engineering'
    }
  ];

  skills = [
    {
      category: 'Programming Languages & Frameworks ',
      items: ['Java', 'C/C++', 'Python', 'Spring boot', 'JavaScript', 'Angular']
    },
    {
      category: 'DataBase & Operating System',
      items: ['PostgreSQL', 'Oracle', 'MySQL', 'MongoDB', 'Windows', 'MacOS']
    },
    {
      category: 'Version Control & Deployment',
      items: ['Git/ GitHub', 'Docker']
    }
  ];

  languages = [
    'Chinese (native)',
    'English (Intermediate)'
  ];

}
