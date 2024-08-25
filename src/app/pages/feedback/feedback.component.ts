import { Component } from '@angular/core';
import { FooterDefaultComponentComponent } from '../../component/footer-default-component/footer-default-component.component';
import { HeaderDefaultComponentComponent } from '../../component/header-default-component/header-default-component.component';
import { FeedbackDefaultComponent } from '../../component/feedback-default/feedback-default.component';
import { ConjuntoFeedbackDefaultComponent } from '../../component/conjunto-feedback-default/conjunto-feedback-default.component';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    HeaderDefaultComponentComponent,
    FooterDefaultComponentComponent,
    FeedbackDefaultComponent,
    ConjuntoFeedbackDefaultComponent
    
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

}
