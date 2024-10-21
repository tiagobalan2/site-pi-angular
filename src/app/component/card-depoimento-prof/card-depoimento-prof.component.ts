import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-depoimento-prof',
  standalone: true,
  imports: [],
  templateUrl: './card-depoimento-prof.component.html',
  styleUrl: './card-depoimento-prof.component.css'
})
export class CardDepoimentoProfComponent {

  @Input() nomeProf : string = "";
  @Input() descricao : string = "";
  @Input() descricao2 : string ="";
  @Input() descricao3 : string ="";
  @Input() imagemSrc : string = "";

}
