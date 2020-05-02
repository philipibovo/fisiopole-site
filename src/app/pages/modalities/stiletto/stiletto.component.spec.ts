import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StilettoComponent } from './stiletto.component';

describe('StilettoComponent', () => {
  let component: StilettoComponent;
  let fixture: ComponentFixture<StilettoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StilettoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StilettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
