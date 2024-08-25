import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselDefaultComponent } from './carrosel-default.component';

describe('CarroselDefaultComponent', () => {
  let component: CarroselDefaultComponent;
  let fixture: ComponentFixture<CarroselDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroselDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroselDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
