import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercontactinfoComponent } from './usercontactinfo.component';

describe('UsercontactinfoComponent', () => {
  let component: UsercontactinfoComponent;
  let fixture: ComponentFixture<UsercontactinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercontactinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercontactinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
