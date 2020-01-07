import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeedAddComponent } from './deed-add.component';

describe('DeedAddComponent', () => {
  let component: DeedAddComponent;
  let fixture: ComponentFixture<DeedAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeedAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeedAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
