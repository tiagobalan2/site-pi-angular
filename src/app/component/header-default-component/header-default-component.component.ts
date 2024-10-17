import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Certifique-se de importar o RouterModule


@Component({
  selector: 'app-header-default-component',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header-default-component.component.html',
  styleUrl: './header-default-component.component.css'
})
export class HeaderDefaultComponentComponent {

  isMenuOpen = false;

  showMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
