import { Component } from '@angular/core';
import { CardGeralDefaultComponent } from '../card-geral-default/card-geral-default.component';

@Component({
  selector: 'app-container-cards-default',
  standalone: true,
  imports: [
    CardGeralDefaultComponent
  ],
  templateUrl: './container-cards-default.component.html',
  styleUrl: './container-cards-default.component.css'
})
export class ContainerCardsDefaultComponent {

}
