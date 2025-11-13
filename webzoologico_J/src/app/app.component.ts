import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animal } from './components/animal-components/animal-components.component';
 @Component({
  selector: 'app-root',
  imports: [RouterOutlet, Animal],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webzoologico_J';
}
