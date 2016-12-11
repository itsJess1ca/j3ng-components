"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hljs = require("highlight.js");
var SyntaxHighlighterComponent = (function () {
    function SyntaxHighlighterComponent() {
        this.label = null;
        this.language = null;
    }
    SyntaxHighlighterComponent.prototype.ngAfterViewInit = function () {
        hljs.configure({
            tabReplace: '  ',
            languages: ['scss', 'typescript', 'html']
        });
        hljs.highlightBlock(this.code.nativeElement);
    };
    return SyntaxHighlighterComponent;
}());
__decorate([
    core_1.ViewChild('code'),
    __metadata("design:type", Object)
], SyntaxHighlighterComponent.prototype, "code", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SyntaxHighlighterComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SyntaxHighlighterComponent.prototype, "language", void 0);
SyntaxHighlighterComponent = __decorate([
    core_1.Component({
        selector: 'j3-syntax-highlighter',
        styles: [
            "\n    #label {\n        color: black;\n    }\n    "
        ],
        template: "<pre>\n    <span id=\"label\" *ngIf=\"label\">{{label}}</span>\n    <code #code class=\"{{language ? language : ''}}\">\n      <ng-content></ng-content>\n    </code>\n  </pre>"
    }),
    __metadata("design:paramtypes", [])
], SyntaxHighlighterComponent);
exports.SyntaxHighlighterComponent = SyntaxHighlighterComponent;
//# sourceMappingURL=syntax-highlighter.component.js.map