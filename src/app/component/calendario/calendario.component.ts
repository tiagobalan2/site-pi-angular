import { Component, Input } from '@angular/core';
import { EventoCalendarioComponent } from '../evento-calendario/evento-calendario.component';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [
    EventoCalendarioComponent
  ],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent {

  @Input() titulo : string = "";
}
