import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDepoimentoProfComponent } from './card-depoimento-prof.component';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit {
  isVisible = false; // Controle de visibilidade

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true; 
    }, 1000);
  }
}


describe('CardDepoimentoProfComponent', () => {
  let component: CardDepoimentoProfComponent;
  let fixture: ComponentFixture<CardDepoimentoProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDepoimentoProfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDepoimentoProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
