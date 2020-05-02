import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerWomanComponent } from './power-woman.component';

describe('PowerWomanComponent', () => {
  let component: PowerWomanComponent;
  let fixture: ComponentFixture<PowerWomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerWomanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerWomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
