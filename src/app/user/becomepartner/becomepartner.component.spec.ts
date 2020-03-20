import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomepartnerComponent } from './becomepartner.component';

describe('BecomepartnerComponent', () => {
  let component: BecomepartnerComponent;
  let fixture: ComponentFixture<BecomepartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomepartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomepartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
