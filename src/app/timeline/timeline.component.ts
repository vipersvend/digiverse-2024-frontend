import { Component } from '@angular/core';
import {  } from '@angular/platform-browser';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  constructor() {
  }

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'js/module_80541270437_Timeline.min.js.download';
    document.body.appendChild(script);
  }
}
