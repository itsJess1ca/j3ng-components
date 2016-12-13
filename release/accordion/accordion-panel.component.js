"use strict";
var core_1 = require('@angular/core');
var AccordionPanelComponent = (function () {
    function AccordionPanelComponent(el) {
        this.el = el;
        this.expanded = false;
        this._hidden = !this.expanded;
        this.expand = new core_1.EventEmitter();
        this.action = new core_1.EventEmitter();
    }
    AccordionPanelComponent.prototype.ngOnInit = function () {
        if (this.index === 0) {
            this.expanded = true;
        }
        this.panelName = "panel-" + this.sanitizeName(this.panel.name);
    };
    AccordionPanelComponent.prototype.ngAfterViewInit = function () {
        this.headerHeight = this.header.nativeElement.offsetHeight;
    };
    AccordionPanelComponent.prototype.togglePanel = function () {
        this.expanded = !this.expanded;
        if (this.expanded)
            this.expandPanel();
    };
    AccordionPanelComponent.prototype.expandPanel = function () {
        this.expand.emit(this.index);
    };
    AccordionPanelComponent.prototype.sanitizeName = function (name) {
        return name.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    };
    AccordionPanelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'j3-accordion-panel',
                    styles: ["\n    :host {\n      position: absolute;\n      display: flex;\n      flex-flow: column nowrap;\n      width: 100%;\n      will-change: transform;\n    }\n    :host(.animatable) {\n      transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1);    \n    }\n    \n    #tabContent {\n      overflow-x: hidden;\n      overflow-y: auto;\n    }\n    \n    .panelHeader {\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n      padding: 0 12px;\n      height: 48px;\n      border: none;\n      border-bottom: 1px solid rgba(0,0,0,0.16);\n      position: relative;\n    }\n    .panelHeader:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0,0,0,0.26);\n      opacity: 0;\n    }\n    .panelHeader:focus {\n      outline: none;\n    }\n    .panelHeader:hover {\n      cursor: pointer;\n    }\n    .panelHeader:focus:after, .panelHeader:hover:after {\n      opacity: 1;\n    }\n    \n    .panelName {\n      margin: 0;\n      font-variant: all-small-caps;\n    }\n    \n    #panelChildren {\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n    }\n    \n    .panelChild {\n      height: 48px;\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n      position: relative;\n      padding: 0 12px;\n    }\n    .panelChild:hover {\n        cursor: pointer;\n    }\n  "],
                    template: "\n    <button\n      id=\"{{panelName}}\"\n      class=\"panelHeader\"\n      role=\"tab\"\n      (click)=\"togglePanel()\"\n      #header\n    >\n      <i class=\"material-icons\" *ngIf=\"panel.icon\">{{panel.icon}}</i><h4 class=\"panelName\">&nbsp;{{panel.name}}</h4>\n    </button>\n    <div \n      id=\"tabContent\" \n      #content\n      role=\"tabpanel\"\n      [attr.aria-labelledby]=\"panelName\"\n    >\n      <ul id=\"panelChildren\">\n        <li \n          class=\"panelChild\" \n          *ngFor=\"let child of panel.items\" \n          (click)=\"action.emit({panel: panel.name, item: child})\"\n        >\n          {{child}}\n        </li>\n      </ul>\n    </div>\n",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    AccordionPanelComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    AccordionPanelComponent.propDecorators = {
        'expanded': [{ type: core_1.HostBinding, args: ['attr.aria-expanded',] },],
        '_hidden': [{ type: core_1.HostBinding, args: ['attr.aria-hidden',] },],
        'header': [{ type: core_1.ViewChild, args: ['header',] },],
        'content': [{ type: core_1.ViewChild, args: ['content',] },],
        'panel': [{ type: core_1.Input },],
        'index': [{ type: core_1.Input },],
        'expand': [{ type: core_1.Output },],
        'action': [{ type: core_1.Output },],
    };
    return AccordionPanelComponent;
}());
exports.AccordionPanelComponent = AccordionPanelComponent;
//# sourceMappingURL=accordion-panel.component.js.map