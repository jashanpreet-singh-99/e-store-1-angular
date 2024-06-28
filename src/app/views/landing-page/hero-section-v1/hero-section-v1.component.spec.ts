import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionV1Component } from './hero-section-v1.component';

describe('HeroSectionV1Component', () => {
  let component: HeroSectionV1Component;
  let fixture: ComponentFixture<HeroSectionV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionV1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSectionV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
