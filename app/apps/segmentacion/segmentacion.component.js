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
var segmentacion_service_1 = require('./segmentacion.service');
var router_1 = require('@angular/router');
var departamento_interface_1 = require('./departamento.interface');
var provincia_interface_1 = require('./provincia.interface');
var distrito_interface_1 = require('./distrito.interface');
var area_interface_1 = require('./area.interface');
var zona_interface_1 = require('./zona.interface');
var SegmentacionComponent = (function () {
    //private validLogin = this.loginservice.isValidSession();
    //private errorLogin = false;
    function SegmentacionComponent(segmentacionservice, router) {
        this.segmentacionservice = segmentacionservice;
        this.router = router;
        this.departamento = new departamento_interface_1.DepartamentoInterface();
        this.provincia = new provincia_interface_1.ProvinciaInterface();
        this.distrito = new distrito_interface_1.DistritoInterface();
        this.area = new area_interface_1.AreaInterface();
        this.zona = new zona_interface_1.ZonaInterface();
        //if (this.validLogin) {
        this.router.navigate(['segmentacion']);
        //}
    }
    SegmentacionComponent.prototype.procesar = function () {
        var url = "?comboDep=" + this.departamento.ccdd + "&comboProv=" + this.provincia.ccpp + "&comboDis=" + this.distrito.ccdi;
        this.segmentacionservice.doLogin(url).subscribe(function (res) {
            /*if(Object.keys(res).length === 0){
                this.errorLogin = true;
            }else{
                document.location.reload();
                localStorage.setItem('usuario',JSON.stringify(res));
            }*/
        });
    };
    SegmentacionComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/apps/segmentacion/segmentacion.component.html',
            providers: [segmentacion_service_1.SegmentacionService]
        }), 
        __metadata('design:paramtypes', [segmentacion_service_1.SegmentacionService, router_1.Router])
    ], SegmentacionComponent);
    return SegmentacionComponent;
}());
exports.SegmentacionComponent = SegmentacionComponent;
//# sourceMappingURL=segmentacion.component.js.map