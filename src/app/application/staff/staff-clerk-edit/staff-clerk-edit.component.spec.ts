import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffClerkEditComponent } from './staff-clerk-edit.component';

describe('StaffClerkEditComponent', () => {
  let component: StaffClerkEditComponent;
  let fixture: ComponentFixture<StaffClerkEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffClerkEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffClerkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
