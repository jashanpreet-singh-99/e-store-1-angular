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

  async ngOnInit() {
    await this.triggerAnimation();
  }
  
  get selectedHeroOption() {
    return this.heroData[this.selectedHero];
  }

  isActive(option: number): boolean {
    return this.selectedHero == option;
  }

  async navigateCarousal(direction: number) {
    this.animationState ='fade';

    await this.triggerAnimation(500, 'start');
    this.selectedHero = (this.selectedHero + direction + this.heroData.length) % this.heroData.length;
    await this.triggerAnimation(150, 'end');
  }

  async navigateToSpecificCarousal(value: number) {
    this.animationState ='fade';

    await this.triggerAnimation(500, 'start');
    this.selectedHero = value;
    await this.triggerAnimation(150, 'end');
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async triggerAnimation(time: number = 50, state: string = 'end') {
    await this.delay(time);
    this.animationState = state;
  }
}
