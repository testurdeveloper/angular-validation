import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLawyerAddComponent } from './staff-lawyer-add.component';

describe('StaffLawyerAddComponent', () => {
  let component: StaffLawyerAddComponent;
  let fixture: ComponentFixture<StaffLawyerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffLawyerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffLawyerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
