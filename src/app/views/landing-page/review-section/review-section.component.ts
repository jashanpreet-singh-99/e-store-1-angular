import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarousalComponent } from "../../../components/carousal/carousal.component";

@Component({
    selector: 'review-section',
    standalone: true,
    templateUrl: './review-section.component.html',
    styleUrl: './review-section.component.scss',
    imports: [CommonModule, CarousalComponent]
})
export class ReviewSectionComponent {

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
  ];

}
