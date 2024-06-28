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

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    animations: [
        trigger('fadeInUp', [
            state('start', style({ transform: 'translateY(-200px)', opacity: '0' })),
            state('end', style({ transform: 'translateY(0px)', opacity: '1' })),
            state('fade', style({ opacity: '0' })),
            transition('start => end', [
                animate('500ms ease-out')
            ]),
            transition('end => fade', [
                animate('500ms ease-out')
            ]),
            transition('fade => start', [
                animate('50ms ease-out')
            ]),
        ]),
        trigger('fadeInDown', [
            state('start', style({ transform: 'translateY(200px)', opacity: '0' })),
            state('end', style({ transform: 'translateY(0px)', opacity: '1' })),
            state('fade', style({ opacity: '0' })),
            transition('start => end', [
                animate('500ms ease-out')
            ]),
            transition('end => fade', [
                animate('500ms ease-in')
            ]),
            transition('fade => start', [
                animate('50ms ease-out')
            ]),
        ]),
        trigger('fadeInLeft', [
            state('start', style({ transform: 'translateX(-50%)', opacity: '0' })),
            state('end', style({ transform: 'translateX(0px)', opacity: '1' })),
            state('fade', style({ opacity: '0' })),
            transition('start => end', [
                animate('500ms ease-out')
            ]),
            transition('end => fade', [
                animate('500ms ease-in')
            ]),
            transition('fade => start', [
                animate('50ms ease-out')
            ]),
        ])
    ],
    imports: [CommonModule, ProductItemComponent, ListingItemComponent, CarousalComponent, HeroSectionV1Component, ProductSectionComponent, FeaturesSectionComponent, NewArrivalSectionComponent, FeaturedProductsSectionComponent]
})
export class LandingPageComponent implements OnInit {
  
  animationState: string = 'start';
  selectedHero: number = 1;

  heroData = [
    {
      'accentText': 'Skin Care',
      'titleText': 'Let you skin do the talking',
      'descriptionText': 'Trending from men and women style collection',
      'smallImg': '/assets/home-1-2.jpg',
      'bigImg': '/assets/home-1-1.jpg',
      'id': 0
    },
    {
      'accentText': 'Skin Care 2',
      'titleText': 'Let you skin do the talking 2',
      'descriptionText': 'Trending from men and women style collection 2',
      'smallImg': '/assets/home-2-2.jpg',
      'bigImg': '/assets/home-2-1.jpg',
      'id': 1
    }
  ];

  productData = [
    {
      'img': '/assets/products-29.jpg',
      'label': 'Pink cream',
      'price': 300,
      'id': 0
    },
    {
      'img': '/assets/products-30.jpg',
      'label': 'Body lotion',
      'price': 250,
      'id': 2
    },
    {
      'img': '/assets/products-31.jpg',
      'label': 'Night beauty',
      'price': 400,
      'id': 3
    },
    {
      'img': '/assets/products-32.jpg',
      'label': 'Hand cleaner',
      'price': 100,
      'id': 4
    }
  ]

  newProductData = [
    {
      'img': '/assets/products-17.jpg',
      'label': 'Kids lotion',
      'price': 199,
      'id': 0
    },
    {
      'img': '/assets/products-18.jpg',
      'label': 'Face cream',
      'price': 129,
      'id': 1
    },
    {
      'img': '/assets/products-19.jpg',
      'label': 'Body cleaner',
      'price': 169,
      'id': 2
    },
    {
      'img': '/assets/products-20.jpg',
      'label': 'Face cleaner',
      'price': 189,
      'id': 3
    },
    {
      'img': '/assets/products-21.jpg',
      'label': 'Night cream',
      'price': 299,
      'id': 4
    },
    {
      'img': '/assets/products-22.jpg',
      'label': 'Face wash',
      'price': 119,
      'id': 5
    },
    {
      'img': '/assets/products-23.jpg',
      'label': 'Light cream',
      'price': 159,
      'id': 6
    },
    {
      'img': '/assets/products-24.jpg',
      'label': 'Milk face wash',
      'price': 139,
      'id': 7
    }
  ];

  reviewsData = [
    {
      description: "I couldn't be happier with my purchase! The quality is top-notch and the customer service was exceptional. The entire shopping experience was smooth and enjoyable, and I received my order earlier than expected.",
      author: 'John D.',
      title: 'Satisfied Shopper',
      rating: 5
    },
    {
      description: "Absolutely love the new collection! The styles are trendy and the fit is perfect. I got so many compliments on my new outfit. Highly recommend this store for anyone looking to stay ahead in fashion.",
      author: 'Emily R.',
      title: 'Fashion Enthusiast',
      rating: 5
    },
    {
      description: "Every product I've bought has exceeded my expectations. Fast shipping and great customer support too! The attention to detail in the products is impressive, and I appreciate the variety offered.",
      author: 'Michael T.',
      title: 'Frequent Buyer',
      rating: 4
    },
    {
      description: "My first order was a great experience. The website is easy to navigate, and the product arrived quickly and exactly as described. I was pleasantly surprised by the quality and will definitely be a returning customer.",
      author: 'Samantha L.',
      title: 'First-Time Customer',
      rating: 5
    },
    {
      description: "I've been shopping here for years and I'm always impressed with the quality and service. The new arrivals never disappoint, and the discounts for loyal customers are a nice bonus. This store truly values its customers.",
      author: 'David K.',
      title: 'Loyal Customer',
      rating: 5
    }
  ]
  
  ngOnInit(): void {
    this.triggerAnimation();
  }

  triggerAnimation(time:number = 50, state: string = 'end'): void {
    setTimeout(() => {
      this.animationState = state;
      console.log('Animation triggered');
    }, time);
  }

  isActive(option: number): boolean {
    return this.selectedHero == option;
  }

  get selectedHeroOption() {
    return this.heroData[this.selectedHero];
  }

  navigateCarousal(direction: number) {
    this.animationState ='fade';
    this.selectedHero += direction;

    if (this.selectedHero < 0) {
      this.selectedHero = this.heroData.length - 1;
    } else if (this.selectedHero > this.heroData.length - 1) {
      this.selectedHero = 0;
    }

    this.triggerAnimation(500, 'start');
    this.triggerAnimation(650, 'end');
  }

  navigateToSpecificCarousal(value: number) {
    this.animationState ='fade';
    this.selectedHero = value;
    this.triggerAnimation(500, 'start');
    this.triggerAnimation(650, 'end');
  }
}
