import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDefaultComponentComponent } from './table-default-component.component';

describe('TableDefaultComponentComponent', () => {
  let component: TableDefaultComponentComponent;
  let fixture: ComponentFixture<TableDefaultComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDefaultComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDefaultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
