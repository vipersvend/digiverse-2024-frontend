import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DocumentationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'digiverse-2024-frontend';

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'js/brightlane-script.min.js.download';
    document.body.appendChild(script);
  }

}
