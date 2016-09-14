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
var segmentacion_service_1 = require('./segmentacion.service');
var Segmentacion = (function () {
    function Segmentacion(segmentacionservice) {
        this.segmentacionservice = segmentacionservice;
        this.cargarDepa();
    }
    Segmentacion.prototype.cargarDepa = function () {
        var _this = this;
        this.segmentacionservice.getDepartamentos().subscribe(function (res) {
            _this.departamentos = res;
            console.log(_this.departamentos);
        });
    };
    /*cargarDepa(ccdd:string="01"){
      this.segmentacionservice.getDepartamentos().subscribe(res=>{
        this.departamentos=res;
        console.log(this.departamentos)
      })
    }*/
    Segmentacion.prototype.cargarProv = function (ccdd, ccpp) {
        var _this = this;
        if (ccdd === void 0) { ccdd = "02"; }
        if (ccpp === void 0) { ccpp = "0"; }
        this.segmentacionservice.getProvincias(ccdd, ccpp).subscribe(function (res) {
            _this.provincias = res;
            console.log(_this.provincias);
        });
    };
    Segmentacion.prototype.cargarDis = function (ccdd, ccpp, ccdi) {
        var _this = this;
        if (ccdd === void 0) { ccdd = "05"; }
        if (ccpp === void 0) { ccpp = "11"; }
        if (ccdi === void 0) { ccdi = "0"; }
        this.segmentacionservice.getDistritos(ccdd, ccpp, ccdi).subscribe(function (res) {
            _this.distritos = res;
            console.log(_this.distritos);
        });
    };
    Segmentacion.prototype.cargarZona = function (ubigeo, zona) {
        var _this = this;
        if (ubigeo === void 0) { ubigeo = "1"; }
        if (zona === void 0) { zona = "1"; }
        this.segmentacionservice.getZona(ubigeo, zona).subscribe(function (res) {
            _this.zonas = res;
            console.log(_this.zonas);
        });
    };
    Segmentacion = __decorate([
        core_1.Component({
            templateUrl: 'app/apps/segmentacion/segmentacion.html',
            providers: [segmentacion_service_1.SegmentacionService]
        }), 
        __metadata('design:paramtypes', [segmentacion_service_1.SegmentacionService])
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