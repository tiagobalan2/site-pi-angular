import { Component, Input, OnInit } from '@angular/core';
import { Aviso } from '../../types/aviso.type';
import { AvisoService } from '../../servicess/aviso.service';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-tabela-de-avisos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './tabela-de-avisos.component.html',
  styleUrl: './tabela-de-avisos.component.css'
})
export class TabelaDeAvisosComponent implements OnInit{
  avisos: Aviso[] = [];

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


