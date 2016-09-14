import {Component} from '@angular/core';
import { NgModule }           from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import {SegmentacionService} from './segmentacion.service';


@Component({
    templateUrl: 'app/apps/segmentacion/segmentacion.html',
    providers:[SegmentacionService]
})

class Segmentacion {
  public departamentos; 
  private provincias:Object;
  private distritos:Object;
  private zonas:Object;
  
  constructor(private segmentacionservice:SegmentacionService){
    this.cargarDepa()
  }

  cargarDepa(){
    this.segmentacionservice.getDepartamentos().subscribe(res=>{
      this.departamentos=res;
      console.log(this.departamentos)
    })
  }

  /*cargarDepa(ccdd:string="01"){
    this.segmentacionservice.getDepartamentos().subscribe(res=>{
      this.departamentos=res;
      console.log(this.departamentos)
    })
  }*/

  cargarProv(ccdd:string="02", ccpp:string="0"){
    this.segmentacionservice.getProvincias(ccdd, ccpp).subscribe(res=>{
      this.provincias=res
      console.log(this.provincias)
    })
  }

  cargarDis(ccdd:string="05", ccpp:string="11", ccdi:string="0"){
    this.segmentacionservice.getDistritos(ccdd, ccpp, ccdi).subscribe(res=>{
      this.distritos=res
      console.log(this.distritos)
    })
  }

  cargarZona(ubigeo:string="1", zona:string="1"){
    this.segmentacionservice.getZona(ubigeo, zona).subscribe(res=>{
      this.zonas=res
      console.log(this.zonas)
    })
  }

}

const routes: Routes = [{ path: '', component: Segmentacion}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  declarations: [Segmentacion]
})

export default class SegmentacionModule { }
