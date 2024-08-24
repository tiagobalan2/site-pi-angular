import { Component } from '@angular/core';
import { FooterDefaultComponentComponent } from '../../component/footer-default-component/footer-default-component.component';
import { HeaderDefaultComponentComponent } from '../../component/header-default-component/header-default-component.component';

@Component({
  selector: 'app-quem-somos',
  standalone: true,
  imports: [
    HeaderDefaultComponentComponent,
    FooterDefaultComponentComponent
  ],
  templateUrl: './quem-somos.component.html',
  styleUrl: './quem-somos.component.css'
})
export class QuemSomosComponent {

}
