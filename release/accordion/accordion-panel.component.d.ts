import { OnInit, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { AccordionPanel } from './accordion.component';
export declare class AccordionPanelComponent implements OnInit, AfterViewInit {
    el: ElementRef;
    expanded: boolean;
    readonly _hidden: boolean;
    header: ElementRef;
    content: ElementRef;
    panel: AccordionPanel;
    index: number;
    expand: EventEmitter<any>;
    action: EventEmitter<any>;
    headerHeight: number;
    panelName: string;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    togglePanel(): void;
    expandPanel(): void;
    sanitizeName(name: string): string;
}
