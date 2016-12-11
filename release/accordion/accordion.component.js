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
var accordion_panel_component_1 = require("./accordion-panel.component");
var AccordionComponent = (function () {
    function AccordionComponent(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.panels = [];
        this.selected = new core_1.EventEmitter();
    }
    AccordionComponent.prototype.ngAfterViewInit = function () {
        this.calculateGeometries();
        this.movePanels();
    };
    AccordionComponent.prototype.expandAccordion = function (expandedIndex) {
        var _this = this;
        if (this._panels && this._panels.length === 0)
            return;
        this._panels.forEach(function (panel) {
            panel.expanded = false;
        });
        this._panels.toArray()[expandedIndex].expanded = true;
        requestAnimationFrame(function () { return _this.movePanels(); });
    };
    AccordionComponent.prototype.navigateTo = function (event) {
        this.selected.emit(event);
    };
    AccordionComponent.prototype.calculateGeometries = function () {
        if (this._panels && this._panels.length === 0)
            return;
        this.headerSize = this._panels.first.headerHeight;
        this.availableHeight = this.el.nativeElement.offsetHeight - (this._panels.length * this.headerSize);
    };
    AccordionComponent.prototype.movePanels = function () {
        var _this = this;
        if (this.panels && this.panels.length === 0)
            return;
        var baseY = 0;
        this._panels.forEach(function (panel, index) {
            requestAnimationFrame(function () {
                // Set the transform position of the element to correct position
                _this.renderer
                    .setElementStyle(panel.el.nativeElement, 'transform', "translateY(" + (baseY + (_this.headerSize * index)) + "px)");
                /*this.renderer
                  .setElementStyle(panel.content.nativeElement, 'height', `${this.availableHeight}px`);*/
                if (panel.expanded) {
                    baseY = _this.availableHeight;
                }
            });
        });
    };
    return AccordionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AccordionComponent.prototype, "panels", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AccordionComponent.prototype, "selected", void 0);
__decorate([
    core_1.ViewChildren(accordion_panel_component_1.AccordionPanelComponent),
    __metadata("design:type", core_1.QueryList)
], AccordionComponent.prototype, "_panels", void 0);
AccordionComponent = __decorate([
    core_1.Component({
        selector: 'j3-accordion',
        template: "\n    <j3-accordion-panel\n      class=\"accordion-panel\"\n      *ngFor=\"let panel of panels; let i = index;\"\n      [panel]=\"panel\"\n      [index]=\"i\"\n      (expand)=\"expandAccordion($event)\"\n      (action)=\"navigateTo($event)\"\n      role=\"tabpanel\"\n    ></j3-accordion-panel>\n  ",
        styles: [
            ":host {\n      display: block;\n      overflow: hidden;\n      position: relative;\n    }\n"
        ],
        host: {
            'attr.role': 'tablist',
            'attr.aria-multiselectable': 'true'
        }
    }),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], AccordionComponent);
exports.AccordionComponent = AccordionComponent;
//# sourceMappingURL=accordion.component.js.map