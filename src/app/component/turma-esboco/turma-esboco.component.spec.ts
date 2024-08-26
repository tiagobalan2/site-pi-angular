import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaEsbocoComponent } from './turma-esboco.component';

describe('TurmaEsbocoComponent', () => {
  let component: TurmaEsbocoComponent;
  let fixture: ComponentFixture<TurmaEsbocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurmaEsbocoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurmaEsbocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
