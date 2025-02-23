import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputSwitchComponent } from './input-switch.component';

describe('InputSwitchComponent', () => {
  let component: InputSwitchComponent;
  let fixture: ComponentFixture<InputSwitchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
