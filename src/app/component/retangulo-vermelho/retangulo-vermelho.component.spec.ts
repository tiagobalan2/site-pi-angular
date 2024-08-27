import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetanguloVermelhoComponent } from './retangulo-vermelho.component';

describe('RetanguloVermelhoComponent', () => {
  let component: RetanguloVermelhoComponent;
  let fixture: ComponentFixture<RetanguloVermelhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetanguloVermelhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetanguloVermelhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
