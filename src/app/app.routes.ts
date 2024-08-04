import { Routes } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component'
import { QrdashboardComponent } from './qrdashboard/qrdashboard.component'

export const routes: Routes = [
    { path: '', component: DocumentationComponent },
    { path: 'docs', component: DocumentationComponent },
    { path: 'qr-dashboard', component: QrdashboardComponent} // Wildcard route for a 404 page
  ];