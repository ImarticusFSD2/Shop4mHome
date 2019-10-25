import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionOrderComponent } from './fashion-order.component';

describe('FashionOrderComponent', () => {
  let component: FashionOrderComponent;
  let fixture: ComponentFixture<FashionOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
