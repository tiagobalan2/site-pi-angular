import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAvisosComponent } from './painel-avisos.component';

describe('PainelAvisosComponent', () => {
  let component: PainelAvisosComponent;
  let fixture: ComponentFixture<PainelAvisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelAvisosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
