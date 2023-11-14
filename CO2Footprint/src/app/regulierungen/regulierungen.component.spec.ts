import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulierungenComponent } from './regulierungen.component';

describe('RegulierungenComponent', () => {
  let component: RegulierungenComponent;
  let fixture: ComponentFixture<RegulierungenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegulierungenComponent]
    });
    fixture = TestBed.createComponent(RegulierungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
