import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleDanceComponent } from './pole-dance.component';

describe('PoleDanceComponent', () => {
  let component: PoleDanceComponent;
  let fixture: ComponentFixture<PoleDanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoleDanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleDanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
