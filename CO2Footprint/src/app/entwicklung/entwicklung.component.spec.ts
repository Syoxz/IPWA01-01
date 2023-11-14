import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntwicklungComponent } from './entwicklung.component';

describe('EntwicklungComponent', () => {
  let component: EntwicklungComponent;
  let fixture: ComponentFixture<EntwicklungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntwicklungComponent]
    });
    fixture = TestBed.createComponent(EntwicklungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
