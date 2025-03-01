import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {TeamMissionComponent} from './team-mission.component';

describe('TeamMissionComponent', () => {
  let component: TeamMissionComponent;
  let fixture: ComponentFixture<TeamMissionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
