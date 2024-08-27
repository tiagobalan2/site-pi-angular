import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoSiteUnifilComponent } from './acesso-site-unifil.component';

describe('AcessoSiteUnifilComponent', () => {
  let component: AcessoSiteUnifilComponent;
  let fixture: ComponentFixture<AcessoSiteUnifilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessoSiteUnifilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessoSiteUnifilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
