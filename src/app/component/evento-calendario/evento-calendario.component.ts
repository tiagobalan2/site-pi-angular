import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-evento-calendario',
  standalone: true,
  imports: [],
  templateUrl: './evento-calendario.component.html',
  styleUrl: './evento-calendario.component.css'
})
export class EventoCalendarioComponent {

  @Input() descricao : string = "";
  @Input() dataDia : string = "";
  @Input() dataMes : string = "";

}
