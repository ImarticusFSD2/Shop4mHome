import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecCartComponent } from './elec-cart.component';

describe('ElecCartComponent', () => {
  let component: ElecCartComponent;
  let fixture: ComponentFixture<ElecCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
