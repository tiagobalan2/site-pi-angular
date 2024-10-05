import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDeAvisosComponent } from './tabela-de-avisos.component';

describe('TabelaDeAvisosComponent', () => {
  let component: TabelaDeAvisosComponent;
  let fixture: ComponentFixture<TabelaDeAvisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaDeAvisosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaDeAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
