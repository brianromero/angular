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
var core_1 = require('@angular/core');
var MyRouterLink_1 = require('../MyRouterLink');
var LayoutComponent = (function () {
    function LayoutComponent(elementRef) {
        this.elementRef = elementRef;
    }
    LayoutComponent.prototype.ngAfterViewInit = function () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "assets/js/core/app.js";
        this.elementRef.nativeElement.appendChild(s);
    };
    LayoutComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/core/layout/layout.component.html',
            directives: [MyRouterLink_1.MyRouterLink]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], LayoutComponent);
    return LayoutComponent;
}());
exports.LayoutComponent = LayoutComponent;
//# sourceMappingURL=layout.component.js.map