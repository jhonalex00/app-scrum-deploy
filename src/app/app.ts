import { Component } from '@angular/core';
// Quitamos RouterOutlet porque no lo usamos
import { DemoComponent } from './demo/demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DemoComponent],   // Solo DemoComponent
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'app-scrum-deploy';
}
