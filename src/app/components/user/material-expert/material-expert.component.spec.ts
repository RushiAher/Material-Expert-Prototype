import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialExpertComponent } from './material-expert.component';

describe('MaterialExpertComponent', () => {
  let component: MaterialExpertComponent;
  let fixture: ComponentFixture<MaterialExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialExpertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
