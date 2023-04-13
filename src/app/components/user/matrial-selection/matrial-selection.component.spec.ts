import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrialSelectionComponent } from './matrial-selection.component';

describe('MatrialSelectionComponent', () => {
  let component: MatrialSelectionComponent;
  let fixture: ComponentFixture<MatrialSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrialSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrialSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
