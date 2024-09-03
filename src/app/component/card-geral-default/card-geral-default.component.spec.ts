import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGeralDefaultComponent } from './card-geral-default.component';

describe('CardGeralDefaultComponent', () => {
  let component: CardGeralDefaultComponent;
  let fixture: ComponentFixture<CardGeralDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGeralDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGeralDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
