import { Component } from '@angular/core';
import { FooterDefaultComponentComponent } from '../../component/footer-default-component/footer-default-component.component';
import { HeaderDefaultComponentComponent } from '../../component/header-default-component/header-default-component.component';
import { ConjuntoaAtividadeDefaultComponent } from '../../component/conjuntoa-atividade-default/conjuntoa-atividade-default.component';
import { ContainerCardsDefaultComponent } from '../../component/container-cards-default/container-cards-default.component';
import { TableDefaultComponentComponent } from '../../component/table-default-component/table-default-component.component';
import { CardDepoimentoProfComponent } from '../../component/card-depoimento-prof/card-depoimento-prof.component';
import { DepoimentosProfessoresDefaultComponent } from '../../component/depoimentos-professores-default/depoimentos-professores-default.component';

@Component({
  selector: 'app-explicacao',
  standalone: true,
  imports: [
    FooterDefaultComponentComponent,
    HeaderDefaultComponentComponent,
    ConjuntoaAtividadeDefaultComponent,
    ContainerCardsDefaultComponent,
    TableDefaultComponentComponent,
    CardDepoimentoProfComponent,
    DepoimentosProfessoresDefaultComponent
  ],
  templateUrl: './explicacao.component.html',
  styleUrl: './explicacao.component.css'
})
export class ExplicacaoComponent {

}
