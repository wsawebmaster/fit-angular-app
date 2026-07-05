import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  @Input() data!: NavbarData
}

export interface NavbarData {
  title: string;
}
