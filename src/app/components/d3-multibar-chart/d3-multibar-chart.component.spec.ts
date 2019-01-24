import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3MultibarChartComponent } from './d3-multibar-chart.component';

describe('D3MultibarChartComponent', () => {
  let component: D3MultibarChartComponent;
  let fixture: ComponentFixture<D3MultibarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3MultibarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3MultibarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
