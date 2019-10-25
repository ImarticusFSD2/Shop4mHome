import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsOrderComponent } from './sports-order.component';

describe('SportsOrderComponent', () => {
  let component: SportsOrderComponent;
  let fixture: ComponentFixture<SportsOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
