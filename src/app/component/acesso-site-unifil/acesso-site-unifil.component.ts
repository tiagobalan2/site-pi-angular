import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acesso-site-unifil',
  standalone: true,
  imports: [],
  templateUrl: './acesso-site-unifil.component.html',
  styleUrl: './acesso-site-unifil.component.css'
})
export class AcessoSiteUnifilComponent {

  @Input() titulo: string = '';
  @Input() imagemSrc: string = '';
  @Input() altText: string = 'Image'; // Default alt texto

}
