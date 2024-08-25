import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuntoFeedbackDefaultComponent } from './conjunto-feedback-default.component';

describe('ConjuntoFeedbackDefaultComponent', () => {
  let component: ConjuntoFeedbackDefaultComponent;
  let fixture: ComponentFixture<ConjuntoFeedbackDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConjuntoFeedbackDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConjuntoFeedbackDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
