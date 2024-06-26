import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { RangePipe } from "../../utils/range.pipe";

@Component({
    selector: 'carousal',
    standalone: true,
    templateUrl: './carousal.component.html',
    styleUrl: './carousal.component.scss',
    animations: [],
    imports: [CommonModule, RangePipe]
})
export class CarousalComponent implements AfterContentInit {
  @Input() 
  set numberOfLayouts(value: number) {
    if (value < 1) {
      console.warn('Invalid numberOfLayouts: Setting to 1. Carousal Component requires, at least 1 Layout.');
      this._numberOfLayouts = 1;
    } else {
      this._numberOfLayouts = value;
    }
  };
  
  @Input() switchControls: boolean = true;
  @Input() hoverSwitchNext: boolean = false;
  @Input() viewIndicator: boolean = true;

  @Input() viewCtrlPadding: string = '16px';
  @Input() viewCtrlGap: string = '16px';

  @ContentChildren(TemplateRef) templates!: QueryList<TemplateRef<any>>;

  numberOfViews: number;
  currentIndex = 0;

  private _numberOfLayouts = 1;

  constructor() {
    this.numberOfViews = this._numberOfLayouts;
  }

  ngAfterContentInit(): void {
    this.templates.changes.subscribe(() => {
      this.currentIndex = 0;
      this.numberOfViews = this.templates.length - this._numberOfLayouts;
    });
    this.numberOfViews = this.templates.length - this._numberOfLayouts;
  }

  get getCurrentTemplates(): Array<TemplateRef<any>> | null {
    return this.templates.length ? this.templates.toArray().slice(this.currentIndex + 1, this.currentIndex + this._numberOfLayouts + 1) : null;
  }

  onNextCarousal(): void {
    if (this.numberOfViews <= 1) return;
    this.currentIndex = (this.currentIndex + 1) % this.numberOfViews;
  }

  onPreviousCarousal(): void {
    if (this.numberOfViews <= 1) return;

    this.currentIndex = (this.currentIndex - 1 + this.numberOfViews) % this.numberOfViews;
  }

  onMouseLeave(): void {
    if (this.hoverSwitchNext) {
      this.onNextCarousal();
    }
  }

  isActiveView(viewNumber: number): boolean {
    return viewNumber == this.currentIndex;
  }

  navigateToSpecificCarousal(viewNumber: number): void {
    this.currentIndex = viewNumber;
  }
}
