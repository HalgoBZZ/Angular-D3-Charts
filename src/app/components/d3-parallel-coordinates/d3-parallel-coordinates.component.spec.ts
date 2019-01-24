import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ParallelCoordinatesComponent } from './d3-parallel-coordinates.component';

describe('D3ParallelCoordinatesComponent', () => {
  let component: D3ParallelCoordinatesComponent;
  let fixture: ComponentFixture<D3ParallelCoordinatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3ParallelCoordinatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ParallelCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
