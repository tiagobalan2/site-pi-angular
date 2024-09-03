import { Component } from '@angular/core';
import { CardDepoimentoProfComponent } from '../card-depoimento-prof/card-depoimento-prof.component';

@Component({
  selector: 'app-depoimentos-professores-default',
  standalone: true,
  imports: [
    CardDepoimentoProfComponent
  ],
  templateUrl: './depoimentos-professores-default.component.html',
  styleUrl: './depoimentos-professores-default.component.css'
})
export class DepoimentosProfessoresDefaultComponent {

}
