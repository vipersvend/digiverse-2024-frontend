import { Routes } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component'
import { QrdashboardComponent } from './qrdashboard/qrdashboard.component'
import { TechSupportComponent } from './tech-support/tech-support.component'
import { LeaderDashboardComponent } from './leader-dashboard/leader-dashboard.component';

export const routes: Routes = [
    { path: '', component: DocumentationComponent },
    { path: 'docs', component: DocumentationComponent },
    { path: 'qr-dashboard', component: QrdashboardComponent},
    { path: 'tech-support', component: TechSupportComponent},
    { path: 'leader-dashboard', component: LeaderDashboardComponent},
  ];