import { NgModule } from '@angular/core';

import { SyntaxHighlighterComponent } from './syntax-highlighter.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [SyntaxHighlighterComponent],
    declarations: [SyntaxHighlighterComponent],
    providers: [],
})
export class SyntaxHighlighterModule { }
