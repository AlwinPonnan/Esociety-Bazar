import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserwebandsocialmediaComponent } from './userwebandsocialmedia.component';

describe('UserwebandsocialmediaComponent', () => {
  let component: UserwebandsocialmediaComponent;
  let fixture: ComponentFixture<UserwebandsocialmediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserwebandsocialmediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserwebandsocialmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
