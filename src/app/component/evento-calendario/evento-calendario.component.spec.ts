import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoCalendarioComponent } from './evento-calendario.component';

describe('EventoCalendarioComponent', () => {
  let component: EventoCalendarioComponent;
  let fixture: ComponentFixture<EventoCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoCalendarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
