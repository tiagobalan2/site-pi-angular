import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atividade-default',
  standalone: true,
  imports: [],
  templateUrl: './atividade-default.component.html',
  styleUrl: './atividade-default.component.css'
})
export class AtividadeDefaultComponent {

  @Input() titulo : string = "";
  @Input() descricao : string = "";

}
