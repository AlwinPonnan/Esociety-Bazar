import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserconfirmaccountComponent } from './userconfirmaccount.component';

describe('UserconfirmaccountComponent', () => {
  let component: UserconfirmaccountComponent;
  let fixture: ComponentFixture<UserconfirmaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserconfirmaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserconfirmaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
