import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAccessComponentComponent } from './no-access-component.component';

describe('NoAccessComponentComponent', () => {
  let component: NoAccessComponentComponent;
  let fixture: ComponentFixture<NoAccessComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAccessComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAccessComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
