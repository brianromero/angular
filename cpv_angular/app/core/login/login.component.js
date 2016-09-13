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
var login_service_1 = require('./../services/login/login.service');
var router_1 = require('@angular/router');
var login_interface_1 = require('./login.interface');
var LoginComponent = (function () {
    function LoginComponent(loginservice, router) {
        this.loginservice = loginservice;
        this.router = router;
        this.login = new login_interface_1.LoginInterface();
        this.validLogin = this.loginservice.isValidSession();
        this.errorLogin = false;
        if (this.validLogin) {
            this.router.navigate(['welcome']);
        }
    }
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        var url = "?username=" + this.login.username + "&clave=" + this.login.clave;
        this.loginservice.doLogin(url).subscribe(function (res) {
            if (Object.keys(res).length === 0) {
                _this.errorLogin = true;
            }
            else {
                document.location.reload();
                localStorage.setItem('usuario', JSON.stringify(res));
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/core/login/login.component.html',
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map