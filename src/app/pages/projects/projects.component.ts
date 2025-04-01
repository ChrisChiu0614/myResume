import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  template: `
  <div class="bg-khaki py-5 px-3 px-md-5">
    <div class="d-flex justify-content-center align-items-center mb-4">
      <h2 class="fw-bold mb-0 text-center">
        <span class="square me-2"></span>Projects
      </h2>
    </div>


    <div class="mb-5" *ngFor="let project of projects">
      <div class="row g-0 bg-white shadow-sm mb-4">
        <!-- 左文字 -->
        <div class="col-md-6 p-4 position-relative">
          <div class="position-absolute start-0 top-0 bottom-0" style="width: 6px; background-color: #3a00f5;"></div>
          <h6 class="fw-bold text-primary ms-3">{{ project.name }}</h6>
          <p class="fw-semibold ms-3">{{ project.title }}</p>
          <ul>
            <li class="ms-3" *ngFor="let des of project.description">{{des}}</li>
          </ul>
        </div>

        <!-- 右圖片 -->
        <div class="col-md-6">
          <img [src]="project.imageUrl" class="img-fluid h-100 w-100 object-fit-cover" />
        </div>
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
    .object-fit-cover {
      object-fit: cover;
    }
  `]
})
export class ProjectsComponent {
  projects:any = [
    {
      name: 'PLM導入 / 專案申請單模組 + 舊系統專案匯入',
      title: '在PLM架構下，客製專案申請單模組。',
      description: [
        '根據規格書進行開發，後端邏輯採用分層架構設計，使用 Java 獨立開發。',
        '使用JDBC串接客戶DB(Postgres DB)，將申請單的資訊存入用於BI。',
        '具備資料結構設計經驗，使用 Java 開發並設計三個 Class，將客戶舊專案數據從其資料庫轉換並導入 PLM 系統中。',
        '使用 Python 進行資料處理與分析，對客戶提供的 5 個 Excel 工作表（共 300 至 500 筆組織架構數據）進行重組與整理，確保數據結構符合 PLM 系統要求。'
      ],
      imageUrl: 'assets/images/project1.png'
    },
    {
      name: 'PLM導入 / 權衡風險評估表單(TRA)模組',
      title: '在PLM架構下，客製TRA表單模組。',
      description: [
        '根據規格書進行開發，後端邏輯採用分層架構設計，使用 Java 獨立開發。',
        '與原客戶舊系統相比執行效率提高30%。',
        '具備獨立與客戶進行需求訪談的經驗，透過 PPT 規劃簽核流程並討論業務手順，以確保流程順暢並避免設計盲點。',
        '曾對客戶進行五次、每次 20 人的教育訓練，確保使用者熟悉系統與流程。'
      ],
      imageUrl: 'assets/images/project1.png'
    },
    {
      name: '教學網站管理系統',
      title: '主架構使用 Angular 17 + Spring Boot + MongoDB 並透過 Docker 進行容器化部署。',
      description: [
        '目的為開發一個 「教學網站管理系統」，用於存放網路上對我有幫助的教學資源，目前功能僅 增刪改查 ，持續擴充與優化中。',
      ],
      imageUrl: 'assets/images/project3.png'
    }
  ];
}
