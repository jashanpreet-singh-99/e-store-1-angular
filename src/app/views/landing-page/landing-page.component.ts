import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroSectionV1Component } from "./hero-section-v1/hero-section-v1.component";
import { ProductSectionComponent } from "./product-section/product-section.component";
import { FeaturesSectionComponent } from "./features-section/features-section.component";
import { NewArrivalSectionComponent } from "./new-arrival-section/new-arrival-section.component";
import { FeaturedProductsSectionComponent } from "./featured-products-section/featured-products-section.component";
import { SubscribeSectionComponent } from "./subscribe-section/subscribe-section.component";
import { TrendingSectionComponent } from "./trending-section/trending-section.component";
import { ReviewSectionComponent } from "./review-section/review-section.component";
import { BrandSectionComponent } from "./brand-section/brand-section.component";
import { FooterSectionComponent } from "./footer-section/footer-section.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [CommonModule, HeroSectionV1Component, ProductSectionComponent, FeaturesSectionComponent, NewArrivalSectionComponent, FeaturedProductsSectionComponent, SubscribeSectionComponent, TrendingSectionComponent, ReviewSectionComponent, BrandSectionComponent, FooterSectionComponent]
})
export class LandingPageComponent{
  
}
