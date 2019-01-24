import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3MultiBarHorizontalChartComponent } from './d3-multi-bar-horizontal-chart.component';

describe('D3MultiBarHorizontalChartComponent', () => {
  let component: D3MultiBarHorizontalChartComponent;
  let fixture: ComponentFixture<D3MultiBarHorizontalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3MultiBarHorizontalChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3MultiBarHorizontalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
