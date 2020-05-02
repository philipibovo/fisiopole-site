import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleChoreographicComponent } from './pole-choreographic.component';

describe('PoleChoreographicComponent', () => {
  let component: PoleChoreographicComponent;
  let fixture: ComponentFixture<PoleChoreographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoleChoreographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleChoreographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
