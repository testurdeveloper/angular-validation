import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffClerkAddComponent } from './staff-clerk-add.component';

describe('StaffClerkAddComponent', () => {
  let component: StaffClerkAddComponent;
  let fixture: ComponentFixture<StaffClerkAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffClerkAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffClerkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
