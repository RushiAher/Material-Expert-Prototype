import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrialProcurementComponent } from './matrial-procurement.component';

describe('MatrialProcurementComponent', () => {
  let component: MatrialProcurementComponent;
  let fixture: ComponentFixture<MatrialProcurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrialProcurementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrialProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
