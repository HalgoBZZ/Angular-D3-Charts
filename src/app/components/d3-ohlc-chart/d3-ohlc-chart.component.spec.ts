import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3OhlcChartComponent } from './d3-ohlc-chart.component';

describe('D3OhlcChartComponent', () => {
  let component: D3OhlcChartComponent;
  let fixture: ComponentFixture<D3OhlcChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3OhlcChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3OhlcChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
