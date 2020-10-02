import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyloginComponent } from './pylogin.component';

describe('PyloginComponent', () => {
  let component: PyloginComponent;
  let fixture: ComponentFixture<PyloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
