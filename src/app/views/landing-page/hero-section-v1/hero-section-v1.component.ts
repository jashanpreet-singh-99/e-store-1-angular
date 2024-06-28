import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-section-v1',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './hero-section-v1.component.html',
  styleUrl: './hero-section-v1.component.scss',
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
})
export class HeroSectionV1Component implements OnInit {

  heroData = [
    {
      'accentText': 'Skin Care',
      'titleText': 'Let your skin do the talking',
      'descriptionText': 'Trending from men and women style collection',
      'smallImg': '/assets/home-1-2.jpg',
      'bigImg': '/assets/home-1-1.jpg',
      'id': 0
    },
    {
      'accentText': 'Skin Care 2',
      'titleText': 'Let your skin do the talking 2',
      'descriptionText': 'Trending from men and women style collection 2',
      'smallImg': '/assets/home-2-2.jpg',
      'bigImg': '/assets/home-2-1.jpg',
      'id': 1
    }
  ];

  animationState: string = 'start';
  selectedHero: number = 1;

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
