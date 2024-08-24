import { Component } from '@angular/core';
import { HeaderDefaultComponentComponent } from '../../component/header-default-component/header-default-component.component';
import { FooterDefaultComponentComponent } from '../../component/footer-default-component/footer-default-component.component';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [
    HeaderDefaultComponentComponent,
    FooterDefaultComponentComponent
  ],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css'
})
export class PaginaInicialComponent {

}
