import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisRacquetsComponent } from './tennis-racquets.component';

describe('TennisRacquetsComponent', () => {
  let component: TennisRacquetsComponent;
  let fixture: ComponentFixture<TennisRacquetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennisRacquetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisRacquetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
