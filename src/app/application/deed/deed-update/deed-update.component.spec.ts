import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeedUpdateComponent } from './deed-update.component';

describe('DeedUpdateComponent', () => {
  let component: DeedUpdateComponent;
  let fixture: ComponentFixture<DeedUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeedUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeedUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
