import {
  Component, Input, Renderer, ElementRef, QueryList,
  ViewChildren, AfterViewInit, Output, EventEmitter, NgZone
} from '@angular/core';
import { AccordionPanelComponent } from './accordion-panel.component';

@Component({
  selector: 'j3-accordion',
  template: `
    <j3-accordion-panel
      class="accordion-panel"
      [ngClass]="{animatable: initialized}"
      *ngFor="let panel of panels; let i = index;"
      [panel]="panel"
      [index]="i"
      (expand)="expandAccordion($event)"
      (action)="navigateTo($event)"
      role="tabpanel"
    ></j3-accordion-panel>
  `,
  styles: [
    `:host {
      display: block;
      overflow: hidden;
      position: relative;
    }
`
  ],
  host: {
    role: 'tablist',
    'aria-multiselectable': 'true'
  }
})
export class AccordionComponent implements AfterViewInit {
  @Input()
  panels: AccordionPanel[] = [];

  @Output()
  selected: EventEmitter<string> = new EventEmitter();

  initialized: boolean = false;

  @ViewChildren(AccordionPanelComponent)
  private _panels: QueryList<AccordionPanelComponent>;

  private headerSize: number;
  private availableHeight;

  constructor(
    private renderer: Renderer,
    private el: ElementRef,
    private zone: NgZone
  ) { }

  ngAfterViewInit() {
    this.calculateGeometries();
    this.movePanels();
  }

  protected expandAccordion(expandedIndex: number) {
    if (this._panels && this._panels.length === 0) return;

    this._panels.forEach(panel => {
      panel.expanded = false;
    });

    this._panels.toArray()[expandedIndex].expanded = true;
    this.movePanels();
  }

  protected navigateTo(event) {
    this.selected.emit(event);
  }

  private calculateGeometries() {
    if (this._panels && this._panels.length === 0) return;

    this.headerSize = this._panels.first.headerHeight;
    this.availableHeight = this.el.nativeElement.offsetHeight - (this._panels.length * this.headerSize);
  }

  private movePanels() {
    if (this.panels && this.panels.length === 0) return;

    let baseY = 0;
    this._panels.forEach((panel, index) => {
      this.zone.runOutsideAngular(() => {
        requestAnimationFrame(() => {

          // Set the transform position of the element to correct position
          this.renderer
            .setElementStyle(panel.el.nativeElement, 'transform',
              `translateY(${baseY + (this.headerSize * index)}px)`);

          this.renderer
            .setElementStyle(panel.content.nativeElement, 'height', `${this.availableHeight}px`);

          if (panel.expanded) baseY = this.availableHeight;

          // panels are in place - we can enable animations
          if (!this.initialized && index === this._panels.length - 1) this.initialized = true;
        });
      });
    });
  }
}

export interface AccordionPanel {
  name: string;
  items: string[];
  icon?: string;
}
