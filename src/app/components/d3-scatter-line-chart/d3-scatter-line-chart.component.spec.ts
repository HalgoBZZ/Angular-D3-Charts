import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ScatterLineChartComponent } from './d3-scatter-line-chart.component';

describe('D3ScatterLineChartComponent', () => {
  let component: D3ScatterLineChartComponent;
  let fixture: ComponentFixture<D3ScatterLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3ScatterLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ScatterLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
