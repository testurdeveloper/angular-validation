import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeedViewComponent } from './deed-view.component';

describe('DeedViewComponent', () => {
  let component: DeedViewComponent;
  let fixture: ComponentFixture<DeedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
