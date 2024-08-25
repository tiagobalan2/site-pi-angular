import { Component } from '@angular/core';
import { FooterDefaultComponentComponent } from '../../component/footer-default-component/footer-default-component.component';
import { HeaderDefaultComponentComponent } from '../../component/header-default-component/header-default-component.component';
import { FormularioDefaultComponent } from '../../component/formulario-default/formulario-default.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    HeaderDefaultComponentComponent,
    FooterDefaultComponentComponent,
    FormularioDefaultComponent
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

}
