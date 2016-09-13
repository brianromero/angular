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
        //private usersUrl: string = 'http://192.168.200.123:8000/api/v1/usuarios/';
        this.usersUrl = 'http://127.0.0.1:8000/inicial/';
    }
    //data de la tabla...
    SegmentacionService.prototype.actualizarTabla = function (url) {
        if (url === void 0) { url = ''; }
        if (url != '') {
            return this.http.get(url).map(this.extractData);
        }
        else {
            return this.http.get(this.usersUrl).map(this.extractData);
        }
    };
    SegmentacionService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    SegmentacionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SegmentacionService);
    return SegmentacionService;
}());
exports.SegmentacionService = SegmentacionService;
//# sourceMappingURL=segmentacion.service.js.map