import { Component } from '@angular/core';

@Component({
  selector: 'app-header-default-component',
  standalone: true,
  imports: [],
  templateUrl: './header-default-component.component.html',
  styleUrl: './header-default-component.component.css'
})
export class HeaderDefaultComponentComponent {

  isMenuOpen = false;

  showMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
