import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Content } from './content/content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Content],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Wagner Andrade');
}
