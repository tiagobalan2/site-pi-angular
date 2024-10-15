import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorSliderComponent } from './professor-slider.component';

describe('ProfessorSliderComponent', () => {
  let component: ProfessorSliderComponent;
  let fixture: ComponentFixture<ProfessorSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
