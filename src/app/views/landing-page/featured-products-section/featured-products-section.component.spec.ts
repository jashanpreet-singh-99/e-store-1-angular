import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProductsSectionComponent } from './featured-products-section.component';

describe('FeaturedProductsSectionComponent', () => {
  let component: FeaturedProductsSectionComponent;
  let fixture: ComponentFixture<FeaturedProductsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedProductsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedProductsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
