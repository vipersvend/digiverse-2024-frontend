import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component'
@Component({
  selector: 'app-leader-dashboard',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './leader-dashboard.component.html',
  styleUrl: './leader-dashboard.component.css'
})
export class LeaderDashboardComponent {

}
