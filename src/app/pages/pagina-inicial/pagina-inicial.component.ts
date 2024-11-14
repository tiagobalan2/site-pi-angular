import { Component } from '@angular/core';
import { HeaderDefaultComponentComponent } from '../../component/header-default-component/header-default-component.component';
import { FooterDefaultComponentComponent } from '../../component/footer-default-component/footer-default-component.component';
import { TextoImgDefaultComponent } from '../../component/texto-img-default/texto-img-default.component';
import { CarroselDefaultComponent } from '../../component/carrosel-default/carrosel-default.component';
import { MuralAtividadesComponent } from '../../component/mural-atividades/mural-atividades.component';
import { FormularioDefaultComponent } from '../../component/formulario-default/formulario-default.component';
import { PainelAvisosComponent } from '../../component/painel-avisos/painel-avisos.component';
import { ConjuntoaAtividadeDefaultComponent } from '../../component/conjuntoa-atividade-default/conjuntoa-atividade-default.component';
import { RetanguloVermelhoComponent } from '../../component/retangulo-vermelho/retangulo-vermelho.component';
import { CalendarioComponent } from '../../component/calendario/calendario.component';
import { AcessoSiteUnifilComponent } from '../../component/acesso-site-unifil/acesso-site-unifil.component';
import { TabelaDeAvisosComponent } from '../../component/tabela-de-avisos/tabela-de-avisos.component';
import { ContainerFotosComponent } from '../../component/container-fotos/container-fotos.component';
import { TableDefaultComponentComponent } from '../../component/table-default-component/table-default-component.component';
import { ExplicacaoComponent } from '../explicacao/explicacao.component';
import { ContainerCardsDefaultComponent } from '../../component/container-cards-default/container-cards-default.component';
import { DepoimentosProfessoresDefaultComponent } from '../../component/depoimentos-professores-default/depoimentos-professores-default.component';
import { ConjuntoFeedbackDefaultComponent } from '../../component/conjunto-feedback-default/conjunto-feedback-default.component';
//import {app-depoimentos-monitores} from 



@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [
    HeaderDefaultComponentComponent,
    FooterDefaultComponentComponent,
    TextoImgDefaultComponent,
    CarroselDefaultComponent,
    ConjuntoFeedbackDefaultComponent,
    MuralAtividadesComponent,
    FormularioDefaultComponent,
    PainelAvisosComponent,
    ConjuntoaAtividadeDefaultComponent,
    RetanguloVermelhoComponent,
    CalendarioComponent,
    AcessoSiteUnifilComponent,
    TabelaDeAvisosComponent,
    ContainerFotosComponent,
    TableDefaultComponentComponent,
    ContainerCardsDefaultComponent,
    DepoimentosProfessoresDefaultComponent
    
  ],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css'
})
export class PaginaInicialComponent {

  
}
