import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MythologyComponent } from './mythology.component';

describe('MythologyComponent', () => {
  let component: MythologyComponent;
  let fixture: ComponentFixture<MythologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MythologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MythologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
