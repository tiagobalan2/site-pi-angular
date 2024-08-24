import { Component } from '@angular/core';
import { FooterDefaultComponentComponent } from '../../component/footer-default-component/footer-default-component.component';
import { HeaderDefaultComponentComponent } from '../../component/header-default-component/header-default-component.component';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    HeaderDefaultComponentComponent,
    FooterDefaultComponentComponent
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

}
