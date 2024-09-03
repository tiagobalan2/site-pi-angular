import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-geral-default',
  standalone: true,
  imports: [],
  templateUrl: './card-geral-default.component.html',
  styleUrl: './card-geral-default.component.css'
})
export class CardGeralDefaultComponent {

  @Input() titulo: string = "";
  @Input() descricao: string = "";
  @Input() btnText: string = "";

  
}
