import { Renderer, ElementRef, QueryList, AfterViewInit, EventEmitter, NgZone } from '@angular/core';
import { AccordionPanelComponent } from './accordion-panel.component';
export declare class AccordionComponent implements AfterViewInit {
    private renderer;
    private el;
    private zone;
    panels: AccordionPanel[];
    selected: EventEmitter<string>;
    initialized: boolean;
    panelElements: QueryList<AccordionPanelComponent>;
    headerSize: number;
    availableHeight: number;
    constructor(renderer: Renderer, el: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    protected expandAccordion(expandedIndex: number): void;
    protected navigateTo(event: any): void;
    private calculateGeometries();
    private movePanels();
}
export interface AccordionPanel {
    name: string;
    items: string[];
    icon?: string;
}
