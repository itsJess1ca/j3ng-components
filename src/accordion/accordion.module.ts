import { NgModule } from '@angular/core';

import { AccordionComponent } from './accordion.component';
import { AccordionPanelComponent } from './accordion-panel.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule
    ],
    exports: [
      AccordionComponent
    ],
    declarations: [
      AccordionPanelComponent,
      AccordionComponent
    ]
})
export class AccordionModule { }
