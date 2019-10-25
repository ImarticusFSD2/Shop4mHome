import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecOrderComponent } from './elec-order.component';

describe('ElecOrderComponent', () => {
  let component: ElecOrderComponent;
  let fixture: ComponentFixture<ElecOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
