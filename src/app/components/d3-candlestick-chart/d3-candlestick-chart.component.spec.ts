import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3CandlestickChartComponent } from './d3-candlestick-chart.component';

describe('D3CandlestickChartComponent', () => {
  let component: D3CandlestickChartComponent;
  let fixture: ComponentFixture<D3CandlestickChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3CandlestickChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3CandlestickChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
