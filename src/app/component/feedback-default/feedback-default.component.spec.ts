import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDefaultComponent } from './feedback-default.component';

describe('FeedbackDefaultComponent', () => {
  let component: FeedbackDefaultComponent;
  let fixture: ComponentFixture<FeedbackDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
