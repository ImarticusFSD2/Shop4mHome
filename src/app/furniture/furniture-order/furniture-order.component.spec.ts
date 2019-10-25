import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureOrderComponent } from './furniture-order.component';

describe('FurnitureOrderComponent', () => {
  let component: FurnitureOrderComponent;
  let fixture: ComponentFixture<FurnitureOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
