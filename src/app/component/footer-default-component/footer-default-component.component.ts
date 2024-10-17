import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Certifique-se de importar o RouterModule


@Component({
  selector: 'app-footer-default-component',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './footer-default-component.component.html',
  styleUrl: './footer-default-component.component.css'
})
export class FooterDefaultComponentComponent {

}
