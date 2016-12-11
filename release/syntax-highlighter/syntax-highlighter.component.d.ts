import { AfterViewInit } from '@angular/core';
export declare class SyntaxHighlighterComponent implements AfterViewInit {
    code: any;
    label: string;
    language: 'typescript' | 'scss' | 'html' | null;
    ngAfterViewInit(): void;
}
