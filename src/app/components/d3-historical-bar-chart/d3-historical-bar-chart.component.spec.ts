import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3HistoricalBarChartComponent } from './d3-historical-bar-chart.component';

describe('D3HistoricalBarChartComponent', () => {
  let component: D3HistoricalBarChartComponent;
  let fixture: ComponentFixture<D3HistoricalBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3HistoricalBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3HistoricalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
