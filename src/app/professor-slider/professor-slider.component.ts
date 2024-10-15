import { Component } from '@angular/core';

@Component({
  selector: 'app-professor-slider',
  templateUrl: './professor-slider.component.html',
  styleUrls: ['./professor-slider.component.css']
})
export class ProfessorSliderComponent {
  currentIndex = 0;
  
  professores = [
    {
      nome: 'Prof. João',
      descricao: 'Especialista em Pensamento Computacional.',
      image: 'assets/img/joao.jpg'
    },
    {
      nome: 'Prof. Maria',
      descricao: 'Doutora em Computação.',
      image: 'assets/img/maria.jpg'
    },
    {
      nome: 'Prof. Carlos',
      descricao: 'Mestre em Inteligência Artificial.',
      image: 'assets/img/carlos.jpg'
    }
  ];

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.professores.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.professores.length - 1) ? this.currentIndex + 1 : 0;
  }
}
