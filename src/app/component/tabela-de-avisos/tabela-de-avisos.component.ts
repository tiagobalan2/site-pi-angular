import { Component, OnInit } from '@angular/core';
import { Aviso } from '../../types/aviso.type';
import { AvisoService } from '../../servicess/aviso.service';

@Component({
  selector: 'app-tabela-de-avisos',
  standalone: true,
  imports: [],
  templateUrl: './tabela-de-avisos.component.html',
  styleUrl: './tabela-de-avisos.component.css'
})
export class TabelaDeAvisosComponent implements OnInit{
  avisos : Aviso[] = [];

  constructor(private avisoService: AvisoService){

  }

  ngOnInit(): void {
    this.avisoService.getAllAvisos().subscribe({
      next: (data) => {
        this.avisos = data;  // Atribui os dados dos usuários à variável
      },
      error: (err) => {
        console.error('Erro ao exibir os avisos', err);  // Log de erro
      }
    });
  }
  }


