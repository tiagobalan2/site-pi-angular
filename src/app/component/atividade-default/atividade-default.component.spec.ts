import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeDefaultComponent } from './atividade-default.component';

describe('AtividadeDefaultComponent', () => {
  let component: AtividadeDefaultComponent;
  let fixture: ComponentFixture<AtividadeDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtividadeDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtividadeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
