import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksOrderComponent } from './books-order.component';

describe('BooksOrderComponent', () => {
  let component: BooksOrderComponent;
  let fixture: ComponentFixture<BooksOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
