import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureCartComponent } from './furniture-cart.component';

describe('FurnitureCartComponent', () => {
  let component: FurnitureCartComponent;
  let fixture: ComponentFixture<FurnitureCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
