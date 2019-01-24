import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3SparkLineComponent } from './d3-spark-line.component';

describe('D3SparkLineComponent', () => {
  let component: D3SparkLineComponent;
  let fixture: ComponentFixture<D3SparkLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3SparkLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3SparkLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
