import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabboComponent } from './habbo.component';

describe('HabboComponent', () => {
  let component: HabboComponent;
  let fixture: ComponentFixture<HabboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
