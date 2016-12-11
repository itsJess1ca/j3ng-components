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
var common_1 = require("@angular/common");
var accordion_module_1 = require("./accordion/accordion.module");
var syntax_highlighter_module_1 = require("./syntax-highlighter/syntax-highlighter.module");
var J3ComponentsModule = (function () {
    function J3ComponentsModule() {
    }
    return J3ComponentsModule;
}());
J3ComponentsModule = __decorate([
    core_1.NgModule({
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
    }),
    __metadata("design:paramtypes", [])
], J3ComponentsModule);
exports.J3ComponentsModule = J3ComponentsModule;
//# sourceMappingURL=streamshape.module.js.map