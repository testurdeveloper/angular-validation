import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUpdaateComponent } from './client-updaate.component';

describe('ClientUpdaateComponent', () => {
  let component: ClientUpdaateComponent;
  let fixture: ComponentFixture<ClientUpdaateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientUpdaateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientUpdaateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
