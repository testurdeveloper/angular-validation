import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLawyerEditComponent } from './staff-lawyer-edit.component';

describe('StaffLawyerEditComponent', () => {
  let component: StaffLawyerEditComponent;
  let fixture: ComponentFixture<StaffLawyerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffLawyerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffLawyerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
