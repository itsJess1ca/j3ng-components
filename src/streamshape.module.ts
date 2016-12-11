import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from './accordion/accordion.module';
import { SyntaxHighlighterModule } from './syntax-highlighter/syntax-highlighter.module';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    SyntaxHighlighterModule
  ],
  declarations: [
  ],
  exports: [
    AccordionModule,
    SyntaxHighlighterModule
  ]
})
export class J3ComponentsModule { }
