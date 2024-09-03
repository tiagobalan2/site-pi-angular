import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDepoimentoProfComponent } from './card-depoimento-prof.component';

describe('CardDepoimentoProfComponent', () => {
  let component: CardDepoimentoProfComponent;
  let fixture: ComponentFixture<CardDepoimentoProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDepoimentoProfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDepoimentoProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
