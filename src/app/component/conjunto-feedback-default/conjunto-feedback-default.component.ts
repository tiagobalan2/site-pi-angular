import { Component } from '@angular/core';
import { FeedbackDefaultComponent } from '../feedback-default/feedback-default.component';

@Component({
  selector: 'app-conjunto-feedback-default',
  standalone: true,
  imports: [
    FeedbackDefaultComponent
  ],
  templateUrl: './conjunto-feedback-default.component.html',
  styleUrl: './conjunto-feedback-default.component.css'
})
export class ConjuntoFeedbackDefaultComponent {

}
