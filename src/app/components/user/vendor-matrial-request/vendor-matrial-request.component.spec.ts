import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorMatrialRequestComponent } from './vendor-matrial-request.component';

describe('VendorMatrialRequestComponent', () => {
  let component: VendorMatrialRequestComponent;
  let fixture: ComponentFixture<VendorMatrialRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorMatrialRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorMatrialRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
