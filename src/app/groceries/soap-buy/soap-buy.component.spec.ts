import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapBuyComponent } from './soap-buy.component';

describe('SoapBuyComponent', () => {
  let component: SoapBuyComponent;
  let fixture: ComponentFixture<SoapBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoapBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoapBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
