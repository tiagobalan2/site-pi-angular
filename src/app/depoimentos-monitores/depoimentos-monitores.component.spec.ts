import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoimentosMonitoresComponent } from './depoimentos-monitores.component';

describe('DepoimentosMonitoresComponent', () => {
  let component: DepoimentosMonitoresComponent;
  let fixture: ComponentFixture<DepoimentosMonitoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepoimentosMonitoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepoimentosMonitoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
