import { AfterViewInit, NgZone } from '@angular/core';
export declare class SyntaxHighlighterComponent implements AfterViewInit {
    private zone;
    code: any;
    label: string;
    language: 'typescript' | 'scss' | 'html' | null;
    constructor(zone: NgZone);
    ngAfterViewInit(): void;
}
