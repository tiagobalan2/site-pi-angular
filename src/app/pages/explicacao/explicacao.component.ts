import { Component } from '@angular/core';
import { FooterDefaultComponentComponent } from '../../component/footer-default-component/footer-default-component.component';
import { HeaderDefaultComponentComponent } from '../../component/header-default-component/header-default-component.component';
import { ConjuntoaAtividadeDefaultComponent } from '../../component/conjuntoa-atividade-default/conjuntoa-atividade-default.component';

@Component({
  selector: 'app-explicacao',
  standalone: true,
  imports: [
    FooterDefaultComponentComponent,
    HeaderDefaultComponentComponent,
    ConjuntoaAtividadeDefaultComponent
  ],
  templateUrl: './explicacao.component.html',
  styleUrl: './explicacao.component.css'
})
export class ExplicacaoComponent {

}
