import {Component} from '@angular/core';
import { NgModule }           from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import {SegmentacionService} from './segmentacion.service';


@Component({
    templateUrl: 'app/apps/segmentacion/segmentacion.html',
    providers:[SegmentacionService]
})

class Segmentacion {
  constructor(private segmentacionservice:SegmentacionService){
    this.cargarDepa()
  }

  cargarDepa(ccdd:string="1"){
    this.segmentacionservice.getDepartamentos(ccdd).subscribe(res=>{
      console.log(res)
    })
  }

  cargarProv(ccdd:string="1", ccpp:string="1"){
    this.segmentacionservice.getProvincias(ccdd, ccpp).subscribe(res=>{
      console.log(res)
    })
  }

  cargarDis(ccdd:string="1", ccpp:string="1", ccdi:string="1"){
    this.segmentacionservice.getDistritos(ccdd, ccpp, ccdi).subscribe(res=>{
      console.log(res)
    })
  }

  cargarZona(ubigeo:string="1", zona:string="1"){
    this.segmentacionservice.getZona(ubigeo, zona).subscribe(res=>{
      console.log(res)
    })
  }

}

const routes: Routes = [{ path: '', component: Segmentacion}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  declarations: [Segmentacion]
})

export default class SegmentacionModule { }
