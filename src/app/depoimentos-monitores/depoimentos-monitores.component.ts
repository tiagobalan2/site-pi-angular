import { Component } from '@angular/core';

interface Depoimento {
  monitor: string;
  texto: string;
  ano: number;
}

@Component({
  selector: 'app-depoimentos-monitores',
  templateUrl: './depoimentos-monitores.component.html',
  styleUrls: ['./depoimentos-monitores.component.css']
})
export class DepoimentosMonitoresComponent {
  depoimentos: Depoimento[] = [
    { monitor: 'Monitor 1', texto: 'Foi uma experiência transformadora!', ano: 2021 },
    { monitor: 'Monitor 2', texto: 'Aprendi muito ao ensinar!', ano: 2022 },
    { monitor: 'Monitor 3', texto: 'Os alunos são inspiradores!', ano: 2023 },
    { monitor: 'Monitor 4', texto: 'Adorei compartilhar conhecimento.', ano: 2024 },
    { monitor: 'Monitor 5', texto: 'Uma jornada incrível de aprendizado!', ano: 2025 }
  ];

  depoimentoAtual: number = 0;

  proximoDepoimento() {
    this.depoimentoAtual = (this.depoimentoAtual + 1) % this.depoimentos.length;
  }

  depoimentoAnterior() {
    this.depoimentoAtual = (this.depoimentoAtual - 1 + this.depoimentos.length) % this.depoimentos.length;
  }
}
