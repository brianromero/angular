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
var router_1 = require('@angular/router');
var menu_service_1 = require('./services/menu.service');
var login_service_1 = require('./services/login/login.service');
var MyRouterLink = (function () {
    function MyRouterLink(dataServices, compiler, _viewContainerRef, loginservice) {
        this.dataServices = dataServices;
        this.compiler = compiler;
        this._viewContainerRef = _viewContainerRef;
        this.loginservice = loginservice;
    }
    MyRouterLink.prototype.getIdUsuario = function () {
        var session = this.loginservice.getJsonSession();
        console.log(session[0]['id_usuario']);
        return session[0]['id_usuario'] || "";
    };
    MyRouterLink.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        var id_usuario = this.getIdUsuario();
        var queryparameter = "?id_usuario=" + id_usuario;
        if (id_usuario != "") {
            this.dataServices.getMenuLinks(queryparameter).subscribe(function (res) {
                localStorage.setItem('menu', JSON.stringify(res));
                var menustring = localStorage.getItem('menu');
                _this.compileToComponent(res).then(function (factory) {
                    _this.cmpRef = _this.target.createComponent(factory);
                });
            });
        }
        else {
            this.compileToComponent("").then(function (factory) {
                _this.cmpRef = _this.target.createComponent(factory);
            });
        }
    };
    MyRouterLink.prototype.ngOnDestroy = function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
            this.cmpRef = null;
        }
    };
    MyRouterLink.prototype.compileToComponent = function (template1) {
        var metadata = new core_1.ComponentMetadata({
            template: template1,
            directives: router_1.ROUTER_DIRECTIVES
        });
        var decoratedCmp = core_1.Component(metadata)((function () {
            function DynamicComponent() {
            }
            return DynamicComponent;
        }()));
        return this.compiler.compileComponentAsync(decoratedCmp);
    };
    __decorate([
        core_1.ViewChild('mymenu', {
            read: core_1.ViewContainerRef
        }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], MyRouterLink.prototype, "target", void 0);
    MyRouterLink = __decorate([
        core_1.Component({
            selector: 'sidebar',
            template: "<ul #mymenu class=\"navigation navigation-main navigation-accordion\"></ul>",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [menu_service_1.MenuServices, login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuServices, core_1.Compiler, core_1.ViewContainerRef, login_service_1.LoginService])
    ], MyRouterLink);
    return MyRouterLink;
}());
exports.MyRouterLink = MyRouterLink;
//# sourceMappingURL=MyRouterLink.js.map