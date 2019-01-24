import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ForceDirectedGraphComponent } from './d3-force-directed-graph.component';

describe('D3ForceDirectedGraphComponent', () => {
  let component: D3ForceDirectedGraphComponent;
  let fixture: ComponentFixture<D3ForceDirectedGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3ForceDirectedGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ForceDirectedGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
