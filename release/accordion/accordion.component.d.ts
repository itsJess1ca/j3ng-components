import { Renderer, ElementRef, AfterViewInit, EventEmitter } from '@angular/core';
export declare class AccordionComponent implements AfterViewInit {
    private renderer;
    private el;
    panels: AccordionPanel[];
    selected: EventEmitter<string>;
    private _panels;
    private headerSize;
    private availableHeight;
    constructor(renderer: Renderer, el: ElementRef);
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
