import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesOrderComponent } from './groceries-order.component';

describe('GroceriesOrderComponent', () => {
  let component: GroceriesOrderComponent;
  let fixture: ComponentFixture<GroceriesOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceriesOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceriesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
