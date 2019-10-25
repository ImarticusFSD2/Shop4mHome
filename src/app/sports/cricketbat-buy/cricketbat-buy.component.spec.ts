import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketbatBuyComponent } from './cricketbat-buy.component';

describe('CricketbatBuyComponent', () => {
  let component: CricketbatBuyComponent;
  let fixture: ComponentFixture<CricketbatBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketbatBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketbatBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
