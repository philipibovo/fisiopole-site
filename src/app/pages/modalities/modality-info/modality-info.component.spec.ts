import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalityInfoComponent } from './modality-info.component';

describe('ModalityInfoComponent', () => {
  let component: ModalityInfoComponent;
  let fixture: ComponentFixture<ModalityInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalityInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
