import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3BoxPlotChartComponent } from './d3-box-plot-chart.component';

describe('D3BoxPlotChartComponent', () => {
  let component: D3BoxPlotChartComponent;
  let fixture: ComponentFixture<D3BoxPlotChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3BoxPlotChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3BoxPlotChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
