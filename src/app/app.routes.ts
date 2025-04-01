import { Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { animation } from '@angular/animations';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'aboutme',
    data:{ animation: 'AboutMePage'},
    pathMatch: 'full'
  },
  {
    path: 'aboutme',
    component: AboutMeComponent,
    data:{ animation: 'AboutMePage'}
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data:{ animation: 'ResumePage'}
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data:{ animation: 'ProjectsPage'}
  },
  {
    path: 'achievements',
    component: AchievementsComponent,
    data:{ animation: 'AchievementsPage'}
  }

];
