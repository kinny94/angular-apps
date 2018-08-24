import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleRouteComponent } from './multiple-route.component';

describe('MultipleRouteComponent', () => {
  let component: MultipleRouteComponent;
  let fixture: ComponentFixture<MultipleRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
