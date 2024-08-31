import { Component, Input } from '@angular/core';
import { TextoImgDefaultComponent } from '../texto-img-default/texto-img-default.component';

@Component({
  selector: 'app-retangulo-vermelho',
  standalone: true,
  imports: [
    TextoImgDefaultComponent
  ],
  templateUrl: './retangulo-vermelho.component.html',
  styleUrl: './retangulo-vermelho.component.css'
})
export class RetanguloVermelhoComponent {
  @Input() imageSrc: string = '';  // URL da imagem
  @Input() altText: string = '';   // Texto alternativo para a imagem
}
