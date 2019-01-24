import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3MultiCahrtComponent } from './d3-multi-cahrt.component';

describe('D3MultiCahrtComponent', () => {
  let component: D3MultiCahrtComponent;
  let fixture: ComponentFixture<D3MultiCahrtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3MultiCahrtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3MultiCahrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
