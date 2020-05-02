import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalTrainingComponent } from './functional-training.component';

describe('FunctionalTrainingComponent', () => {
  let component: FunctionalTrainingComponent;
  let fixture: ComponentFixture<FunctionalTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
