import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3LineWithFocusChartComponent } from './d3-line-with-focus-chart.component';

describe('D3LineWithFocusChartComponent', () => {
  let component: D3LineWithFocusChartComponent;
  let fixture: ComponentFixture<D3LineWithFocusChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3LineWithFocusChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3LineWithFocusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
