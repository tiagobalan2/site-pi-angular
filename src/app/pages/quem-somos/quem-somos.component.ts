import { Component } from '@angular/core';
import { FooterDefaultComponentComponent } from '../../component/footer-default-component/footer-default-component.component';
import { HeaderDefaultComponentComponent } from '../../component/header-default-component/header-default-component.component';
import { TextoImgDefaultComponent } from '../../component/texto-img-default/texto-img-default.component';
import { ConjuntoFeedbackDefaultComponent } from '../../component/conjunto-feedback-default/conjunto-feedback-default.component';

@Component({
  selector: 'app-quem-somos',
  standalone: true,
  imports: [
    HeaderDefaultComponentComponent,
    FooterDefaultComponentComponent,
    TextoImgDefaultComponent,
    ConjuntoFeedbackDefaultComponent

  ],
  templateUrl: './quem-somos.component.html',
  styleUrl: './quem-somos.component.css'
})
export class QuemSomosComponent {

}
