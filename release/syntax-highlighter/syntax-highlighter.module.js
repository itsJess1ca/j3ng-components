"use strict";
var core_1 = require('@angular/core');
var syntax_highlighter_component_1 = require('./syntax-highlighter.component');
var common_1 = require('@angular/common');
var SyntaxHighlighterModule = (function () {
    function SyntaxHighlighterModule() {
    }
    SyntaxHighlighterModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    exports: [syntax_highlighter_component_1.SyntaxHighlighterComponent],
                    declarations: [syntax_highlighter_component_1.SyntaxHighlighterComponent],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    SyntaxHighlighterModule.ctorParameters = function () { return []; };
    return SyntaxHighlighterModule;
}());
exports.SyntaxHighlighterModule = SyntaxHighlighterModule;
//# sourceMappingURL=syntax-highlighter.module.js.map