"use strict";
var core_1 = require('@angular/core');
var hljs = require('highlight.js');
var SyntaxHighlighterComponent = (function () {
    function SyntaxHighlighterComponent(zone) {
        this.zone = zone;
        this.label = null;
        this.language = null;
    }
    SyntaxHighlighterComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        hljs.configure({
            tabReplace: '  ',
            languages: ['scss', 'typescript', 'html']
        });
        this.zone.runOutsideAngular(function () { return hljs.highlightBlock(_this.code.nativeElement); });
    };
    SyntaxHighlighterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'j3-syntax-highlighter',
                    styles: [
                        "\n    #label {\n        color: black;\n    }\n    "
                    ],
                    template: "<pre>\n    <span id=\"label\" *ngIf=\"label\">{{label}}</span>\n    <code #code class=\"{{language ? language : ''}}\">\n      <ng-content></ng-content>\n    </code>\n  </pre>"
                },] },
    ];
    /** @nocollapse */
    SyntaxHighlighterComponent.ctorParameters = function () { return [
        { type: core_1.NgZone, },
    ]; };
    SyntaxHighlighterComponent.propDecorators = {
        'code': [{ type: core_1.ViewChild, args: ['code',] },],
        'label': [{ type: core_1.Input },],
        'language': [{ type: core_1.Input },],
    };
    return SyntaxHighlighterComponent;
}());
exports.SyntaxHighlighterComponent = SyntaxHighlighterComponent;
//# sourceMappingURL=syntax-highlighter.component.js.map