import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalSectionComponent } from './new-arrival-section.component';

describe('NewArrivalSectionComponent', () => {
  let component: NewArrivalSectionComponent;
  let fixture: ComponentFixture<NewArrivalSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewArrivalSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewArrivalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
