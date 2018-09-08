import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopOtherComponent } from './desktop-other.component';

describe('DesktopOtherComponent', () => {
  let component: DesktopOtherComponent;
  let fixture: ComponentFixture<DesktopOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
