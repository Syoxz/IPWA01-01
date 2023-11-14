import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NachhaltigkeitComponent } from './nachhaltigkeit.component';

describe('NachhaltigkeitComponent', () => {
  let component: NachhaltigkeitComponent;
  let fixture: ComponentFixture<NachhaltigkeitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NachhaltigkeitComponent]
    });
    fixture = TestBed.createComponent(NachhaltigkeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
