import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilingAnalyticsComponent } from './biling-analytics.component';

describe('BilingAnalyticsComponent', () => {
  let component: BilingAnalyticsComponent;
  let fixture: ComponentFixture<BilingAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilingAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilingAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
