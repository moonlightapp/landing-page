import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InvestInUsComponent } from './invest-in-us.component';

describe('InvestInUsComponent', () => {
  let component: InvestInUsComponent;
  let fixture: ComponentFixture<InvestInUsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestInUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestInUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
