import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OginComponent } from './ogin.component';

describe('OginComponent', () => {
  let component: OginComponent;
  let fixture: ComponentFixture<OginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
