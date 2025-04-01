import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [NgFor],
  template: `
  <div class="bg-khaki py-5 px-3 px-md-5">
    <div class="d-flex justify-content-center align-items-center mb-4">
      <h2 class="fw-bold mb-0 text-center">
        <span class="square me-2"></span>Achievements
      </h2>
    </div>


    <div class="mb-5" *ngFor="let achievement of achievements">
      <div class="row g-0 bg-white shadow-sm mb-4">
        <!-- 左文字 -->
        <div class="col-md-6 p-4 position-relative">
          <div class="position-absolute start-0 top-0 bottom-0" style="width: 6px; background-color: #3a00f5;"></div>
          <h6 class="fw-bold text-primary ms-3">{{ achievement.name }}</h6>
          <p class="fw-semibold ms-3">{{ achievement.description }}</p>
        </div>

        <!-- 右圖片 -->
        <div class="col-md-6">
          <img [src]="achievement.imageUrl" class="img-fluid h-100 w-100 object-fit-cover" />
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
export class AchievementsComponent {
  achievements:any = [
    {
      name: '敦陽科技 2024年度 工程類優秀員工',
      description: '敦陽科技 2024年度 工程類優秀員工',
      imageUrl: 'assets/images/sti.jpg'
    },
    {
      name: 'Duck University - Introductory C Programming',
      description: '透過Duke的C語言學程，打好Ｃ語言基礎。',
      imageUrl: 'assets/images/achi1.jpg'
    },
    {
      name: 'Duck University - Programming Foundations with JavaScript, HTML and CSS',
      description: '學習基礎網頁開發，使用 HTML、CSS 和 JavaScript 建立網頁。',
      imageUrl: 'assets/images/achi2.jpeg'
    },
    {
      name: 'Duck University - Java Programming: Solving Problems with Software',
      description: '學習 Java 程式設計，提升程式開發與問題解決能力。課程涵蓋演算法設計、程式開發與除錯，並使用自訂的開源類別來撰寫程式，處理圖片、網站及其他類型的數據。課程最終將開發一個程式，透過分析逗號分隔值（CSV）檔案，來追蹤美國不同嬰兒名字隨時間變化的流行度。',
      imageUrl: 'assets/images/achi3.jpeg'
    },

  ];
}
