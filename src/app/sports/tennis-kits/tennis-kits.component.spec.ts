import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisKitsComponent } from './tennis-kits.component';

describe('TennisKitsComponent', () => {
  let component: TennisKitsComponent;
  let fixture: ComponentFixture<TennisKitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennisKitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
