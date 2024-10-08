import { Component } from '@angular/core';
import { FooterDefaultComponentComponent } from '../../component/footer-default-component/footer-default-component.component';
import { HeaderDefaultComponentComponent } from '../../component/header-default-component/header-default-component.component';
import { TurmaEsbocoComponent } from '../../component/turma-esboco/turma-esboco.component';

@Component({
  selector: 'app-mural',
  standalone: true,
  imports: [
    HeaderDefaultComponentComponent,
    FooterDefaultComponentComponent,
    TurmaEsbocoComponent
  ],
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})
export class MuralComponent {

}
