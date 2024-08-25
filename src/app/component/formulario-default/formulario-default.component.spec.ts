import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDefaultComponent } from './formulario-default.component';

describe('FormularioDefaultComponent', () => {
  let component: FormularioDefaultComponent;
  let fixture: ComponentFixture<FormularioDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
