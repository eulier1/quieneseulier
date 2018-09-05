import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPortfolioComponent } from './desktop-portfolio.component';

describe('DesktopPorfolioComponent', () => {
  let component: DesktopPortfolioComponent;
  let fixture: ComponentFixture<DesktopPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
