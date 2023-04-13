import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardionComponent } from './dashboardion.component';

describe('DashboardionComponent', () => {
  let component: DashboardionComponent;
  let fixture: ComponentFixture<DashboardionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
