import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3DiscreteBarChartComponent } from './d3-discrete-bar-chart.component';

describe('D3DiscreteBarChartComponent', () => {
  let component: D3DiscreteBarChartComponent;
  let fixture: ComponentFixture<D3DiscreteBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3DiscreteBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3DiscreteBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
