import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQaccordianComponent } from './faqaccordian.component';

describe('FAQaccordianComponent', () => {
  let component: FAQaccordianComponent;
  let fixture: ComponentFixture<FAQaccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FAQaccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQaccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
