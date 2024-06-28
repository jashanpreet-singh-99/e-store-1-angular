import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

enum NavMode{
  Open,
  Closed
}

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('void', style({
        height: '0px',
        opacity: 0
      })),
      state('*', style({
        height: '*',
        opacity: 1
      })),
      transition('void <=> *', [
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class NavBarComponent {

  state: NavMode = NavMode.Open;

  toggleNavMode(): void {
    this.state = (this.state === NavMode.Open) ? NavMode.Closed : NavMode.Open;
  }

  get NavMenuIcon(): string {
    return (this.state === NavMode.Closed) ? 'menu' : 'close';
  }

  get showMobileMenu(): boolean {
    return (this.state === NavMode.Open) ? true : false;
  }
}
