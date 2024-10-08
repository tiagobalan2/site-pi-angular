import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerFotosComponent } from './container-fotos.component';

describe('ContainerFotosComponent', () => {
  let component: ContainerFotosComponent;
  let fixture: ComponentFixture<ContainerFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerFotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
