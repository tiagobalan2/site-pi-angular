import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuntoaAtividadeDefaultComponent } from './conjuntoa-atividade-default.component';

describe('ConjuntoaAtividadeDefaultComponent', () => {
  let component: ConjuntoaAtividadeDefaultComponent;
  let fixture: ComponentFixture<ConjuntoaAtividadeDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConjuntoaAtividadeDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConjuntoaAtividadeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
