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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
// Statics
require('rxjs/add/observable/throw');
// Operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var SegmentacionService = (function () {
    function SegmentacionService(http) {
        this.http = http;
        this.loginUrl = 'http://192.168.200.123:8000/authentication/login/';
    }
    SegmentacionService.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    };
    SegmentacionService.prototype.doLogin = function (queryparameters) {
        var _body = queryparameters;
        return this.http.get(this.loginUrl + _body).map(this.extractData).catch(this.handleError);
    };
    SegmentacionService.prototype.logout = function (key) {
        if (key === void 0) { key = ''; }
        localStorage.removeItem(key === '' ? 'usuario' : key);
    };
    SegmentacionService.prototype.getJsonSession = function (key) {
        if (key === void 0) { key = ''; }
        return JSON.parse(localStorage.getItem(key === '' ? 'usuario' : key));
    };
    SegmentacionService.prototype.isValidSession = function (key) {
        if (key === void 0) { key = ''; }
        var sesion = localStorage.getItem(key === '' ? 'usuario' : key);
        return sesion == null ? false : true;
    };
    SegmentacionService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    SegmentacionService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    SegmentacionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SegmentacionService);
    return SegmentacionService;
}());
exports.SegmentacionService = SegmentacionService;
//# sourceMappingURL=segmentacion.service.js.map