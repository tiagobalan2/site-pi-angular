import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-default',
  standalone: true,
  imports: [],
  templateUrl: './feedback-default.component.html',
  styleUrl: './feedback-default.component.css'
})
export class FeedbackDefaultComponent {
  @Input() nomeAluno : string = "";
  @Input() descricao : string = "";
}
