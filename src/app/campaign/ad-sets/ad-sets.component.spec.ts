import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdSetsComponent } from './ad-sets.component';

describe('AdSetsComponent', () => {
  let component: AdSetsComponent;
  let fixture: ComponentFixture<AdSetsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
