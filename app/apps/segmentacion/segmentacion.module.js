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
var core_2 = require('@angular/core');
var router_1 = require('@angular/router');
var Segmentacion = (function () {
    function Segmentacion() {
    }
    Segmentacion.prototype.comboInicial = function () {
    };
    Segmentacion.prototype.filtroDepa = function (comboDepa) {
        console.log(comboDepa);
    };
    Segmentacion.prototype.comboDepa = function (comboDepa) {
        //$('#comboPro').children().remove()
        //eval("$('#comboPro').append('<option value=0>TODOS</option>');")
        console.log(comboDepa);
        this.combo();
        this.actualizarTabla();
    };
    Segmentacion.prototype.comboProv = function (comboPro) {
        console.log(comboPro);
        this.combo();
        this.actualizarTabla();
    };
    Segmentacion.prototype.comboDis = function (comboDis) {
        console.log(comboDis);
        this.combo();
        this.actualizarTabla();
    };
    Segmentacion.prototype.comboArea = function (comboArea) {
        console.log(comboArea);
        this.combo();
        this.actualizarTabla();
    };
    Segmentacion.prototype.comboZona = function (comboZona) {
        console.log(comboZona);
        this.combo();
        this.actualizarTabla();
    };
    Segmentacion.prototype.actualizarTabla = function () {
        console.log("actualiza tabla");
        return "hola mundo";
    };
    Segmentacion.prototype.combo = function () {
        console.log("actualiza filtro");
    };
    Segmentacion = __decorate([
        core_1.Component({
            templateUrl: 'app/apps/segmentacion/segmentacion.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Segmentacion);
    return Segmentacion;
}());
var routes = [{ path: '', component: Segmentacion }];
var SegmentacionModule = (function () {
    function SegmentacionModule() {
    }
    SegmentacionModule = __decorate([
        core_2.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            declarations: [Segmentacion]
        }), 
        __metadata('design:paramtypes', [])
    ], SegmentacionModule);
    return SegmentacionModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SegmentacionModule;
//# sourceMappingURL=segmentacion.module.js.map