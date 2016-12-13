"use strict";
var core_1 = require('@angular/core');
var accordion_panel_component_1 = require('./accordion-panel.component');
var AccordionComponent = (function () {
    function AccordionComponent(renderer, el, zone) {
        this.renderer = renderer;
        this.el = el;
        this.zone = zone;
        this.panels = [];
        this.selected = new core_1.EventEmitter();
        this.initialized = false;
    }
    AccordionComponent.prototype.ngAfterViewInit = function () {
        this.calculateGeometries();
        this.movePanels();
    };
    AccordionComponent.prototype.expandAccordion = function (expandedIndex) {
        if (this.panelElements && this.panelElements.length === 0)
            return;
        this.panelElements.forEach(function (panel) {
            panel.expanded = false;
        });
        this.panelElements.toArray()[expandedIndex].expanded = true;
        this.movePanels();
    };
    AccordionComponent.prototype.navigateTo = function (event) {
        this.selected.emit(event);
    };
    AccordionComponent.prototype.calculateGeometries = function () {
        if (this.panelElements && this.panelElements.length === 0)
            return;
        this.headerSize = this.panelElements.first.headerHeight;
        this.availableHeight = this.el.nativeElement.offsetHeight - (this.panelElements.length * this.headerSize);
    };
    AccordionComponent.prototype.movePanels = function () {
        var _this = this;
        if (this.panels && this.panels.length === 0)
            return;
        var baseY = 0;
        this.panelElements.forEach(function (panel, index) {
            _this.zone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                    // Set the transform position of the element to correct position
                    _this.renderer
                        .setElementStyle(panel.el.nativeElement, 'transform', "translateY(" + (baseY + (_this.headerSize * index)) + "px)");
                    _this.renderer
                        .setElementStyle(panel.content.nativeElement, 'height', _this.availableHeight + "px");
                    if (panel.expanded)
                        baseY = _this.availableHeight;
                    // panels are in place - we can enable animations
                    if (!_this.initialized && index === _this.panelElements.length - 1)
                        _this.initialized = true;
                });
            });
        });
    };
    AccordionComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'j3-accordion',
                    template: "\n    <j3-accordion-panel\n      class=\"accordion-panel\"\n      [ngClass]=\"{animatable: initialized}\"\n      *ngFor=\"let panel of panels; let i = index;\"\n      [panel]=\"panel\"\n      [index]=\"i\"\n      (expand)=\"expandAccordion($event)\"\n      (action)=\"navigateTo($event)\"\n      role=\"tabpanel\"\n    ></j3-accordion-panel>\n  ",
                    styles: [
                        ":host {\n      display: block;\n      overflow: hidden;\n      position: relative;\n    }\n"
                    ],
                    host: {
                        role: 'tablist',
                        'aria-multiselectable': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    AccordionComponent.ctorParameters = function () { return [
        { type: core_1.Renderer, },
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
    ]; };
    AccordionComponent.propDecorators = {
        'panels': [{ type: core_1.Input },],
        'selected': [{ type: core_1.Output },],
        'panelElements': [{ type: core_1.ViewChildren, args: [accordion_panel_component_1.AccordionPanelComponent,] },],
    };
    return AccordionComponent;
}());
exports.AccordionComponent = AccordionComponent;
//# sourceMappingURL=accordion.component.js.map