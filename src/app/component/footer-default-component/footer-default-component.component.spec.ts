import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDefaultComponentComponent } from './footer-default-component.component';

describe('FooterDefaultComponentComponent', () => {
  let component: FooterDefaultComponentComponent;
  let fixture: ComponentFixture<FooterDefaultComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterDefaultComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDefaultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
