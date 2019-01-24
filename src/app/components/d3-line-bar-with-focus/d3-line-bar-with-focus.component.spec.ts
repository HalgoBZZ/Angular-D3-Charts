import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3LineBarWithFocusComponent } from './d3-line-bar-with-focus.component';

describe('D3LineBarWithFocusComponent', () => {
  let component: D3LineBarWithFocusComponent;
  let fixture: ComponentFixture<D3LineBarWithFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3LineBarWithFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3LineBarWithFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
