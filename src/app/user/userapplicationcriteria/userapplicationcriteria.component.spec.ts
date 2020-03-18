import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserapplicationcriteriaComponent } from './userapplicationcriteria.component';

describe('UserapplicationcriteriaComponent', () => {
  let component: UserapplicationcriteriaComponent;
  let fixture: ComponentFixture<UserapplicationcriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserapplicationcriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserapplicationcriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
