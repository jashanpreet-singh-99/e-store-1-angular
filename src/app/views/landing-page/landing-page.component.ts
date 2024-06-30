import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from "../../components/product-item/product-item.component";
import { ListingItemComponent } from "../../components/listing-item/listing-item.component";
import { CarousalComponent } from "../../components/carousal/carousal.component";
import { HeroSectionV1Component } from "./hero-section-v1/hero-section-v1.component";
import { ProductSectionComponent } from "./product-section/product-section.component";
import { FeaturesSectionComponent } from "./features-section/features-section.component";
import { NewArrivalSectionComponent } from "./new-arrival-section/new-arrival-section.component";
import { FeaturedProductsSectionComponent } from "./featured-products-section/featured-products-section.component";
import { SubscribeSectionComponent } from "./subscribe-section/subscribe-section.component";
import { TrendingSectionComponent } from "./trending-section/trending-section.component";
import { ReviewSectionComponent } from "./review-section/review-section.component";
import { BrandSectionComponent } from "./brand-section/brand-section.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [CommonModule, HeroSectionV1Component, ProductSectionComponent, FeaturesSectionComponent, NewArrivalSectionComponent, FeaturedProductsSectionComponent, SubscribeSectionComponent, TrendingSectionComponent, ReviewSectionComponent, BrandSectionComponent]
})
export class LandingPageComponent implements OnInit {
  
  ngOnInit(): void {
  }
}
