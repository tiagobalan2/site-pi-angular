import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-texto-img-default',
  standalone: true,
  imports: [],
  templateUrl: './texto-img-default.component.html',
  styleUrl: './texto-img-default.component.css'
})
export class TextoImgDefaultComponent {

  @Input() titulo: string = '';
  @Input() p: string = '';
  @Input() imagemSrc: string = '';
  @Input() altText: string = 'Image'; // Default alt text

}
