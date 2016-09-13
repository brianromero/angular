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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var layout_component_1 = require('./layout/layout.component');
var header_component_1 = require('./header/header.component');
var http_1 = require('@angular/http');
var routing_1 = require('../routing');
var login_component_1 = require('./login/login.component');
var login = localStorage.getItem('usuario');
var _declarations = [];
var _bootstrap = [];
console.log(login);
if (login == null) {
    _declarations = [];
    _bootstrap = [login_component_1.LoginComponent];
}
else {
    _declarations = [layout_component_1.LayoutComponent, header_component_1.HeaderComponent];
    _bootstrap = [layout_component_1.LayoutComponent];
}
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, routing_1.routing, forms_1.FormsModule],
            declarations: _declarations,
            bootstrap: _bootstrap,
        }), 
        __metadata('design:paramtypes', [])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map