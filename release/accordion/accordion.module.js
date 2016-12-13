"use strict";
var core_1 = require('@angular/core');
var accordion_component_1 = require('./accordion.component');
var accordion_panel_component_1 = require('./accordion-panel.component');
var common_1 = require('@angular/common');
var AccordionModule = (function () {
    function AccordionModule() {
    }
    AccordionModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    exports: [
                        accordion_component_1.AccordionComponent
                    ],
                    declarations: [
                        accordion_panel_component_1.AccordionPanelComponent,
                        accordion_component_1.AccordionComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    AccordionModule.ctorParameters = function () { return []; };
    return AccordionModule;
}());
exports.AccordionModule = AccordionModule;
//# sourceMappingURL=accordion.module.js.map