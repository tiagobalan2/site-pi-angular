import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDefaultComponentComponent } from './header-default-component.component';

describe('HeaderDefaultComponentComponent', () => {
  let component: HeaderDefaultComponentComponent;
  let fixture: ComponentFixture<HeaderDefaultComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDefaultComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDefaultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
