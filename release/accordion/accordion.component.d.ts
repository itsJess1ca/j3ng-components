import { Renderer, ElementRef, AfterViewInit, EventEmitter, NgZone } from '@angular/core';
export declare class AccordionComponent implements AfterViewInit {
    private renderer;
    private el;
    private zone;
    panels: AccordionPanel[];
    selected: EventEmitter<string>;
    initialized: boolean;
    private _panels;
    private headerSize;
    private availableHeight;
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
