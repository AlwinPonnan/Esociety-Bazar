import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercompanyprofileComponent } from './usercompanyprofile.component';

describe('UsercompanyprofileComponent', () => {
  let component: UsercompanyprofileComponent;
  let fixture: ComponentFixture<UsercompanyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercompanyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercompanyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
