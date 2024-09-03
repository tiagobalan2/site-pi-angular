import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCardsDefaultComponent } from './container-cards-default.component';

describe('ContainerCardsDefaultComponent', () => {
  let component: ContainerCardsDefaultComponent;
  let fixture: ComponentFixture<ContainerCardsDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerCardsDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerCardsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
