import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriviledgeManagementComponent } from './priviledge-management.component';

describe('PriviledgeManagementComponent', () => {
  let component: PriviledgeManagementComponent;
  let fixture: ComponentFixture<PriviledgeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriviledgeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriviledgeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
