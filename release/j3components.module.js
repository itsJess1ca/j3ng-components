"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var accordion_module_1 = require('./accordion/accordion.module');
var syntax_highlighter_module_1 = require('./syntax-highlighter/syntax-highlighter.module');
var J3ComponentsModule = (function () {
    function J3ComponentsModule() {
    }
    J3ComponentsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        accordion_module_1.AccordionModule,
                        syntax_highlighter_module_1.SyntaxHighlighterModule
                    ],
                    declarations: [],
                    exports: [
                        accordion_module_1.AccordionModule,
                        syntax_highlighter_module_1.SyntaxHighlighterModule
                    ]
                },] },
    ];
    /** @nocollapse */
    J3ComponentsModule.ctorParameters = function () { return []; };
    return J3ComponentsModule;
}());
exports.J3ComponentsModule = J3ComponentsModule;
//# sourceMappingURL=j3components.module.js.map