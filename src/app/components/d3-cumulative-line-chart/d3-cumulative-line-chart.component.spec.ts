import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3CumulativeLineChartComponent } from './d3-cumulative-line-chart.component';

describe('D3CumulativeLineChartComponent', () => {
  let component: D3CumulativeLineChartComponent;
  let fixture: ComponentFixture<D3CumulativeLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3CumulativeLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3CumulativeLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
