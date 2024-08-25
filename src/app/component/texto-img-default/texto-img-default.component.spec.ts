import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoImgDefaultComponent } from './texto-img-default.component';

describe('TextoImgDefaultComponent', () => {
  let component: TextoImgDefaultComponent;
  let fixture: ComponentFixture<TextoImgDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoImgDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoImgDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
