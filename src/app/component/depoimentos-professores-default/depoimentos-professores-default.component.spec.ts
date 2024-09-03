import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoimentosProfessoresDefaultComponent } from './depoimentos-professores-default.component';

describe('DepoimentosProfessoresDefaultComponent', () => {
  let component: DepoimentosProfessoresDefaultComponent;
  let fixture: ComponentFixture<DepoimentosProfessoresDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepoimentosProfessoresDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepoimentosProfessoresDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
