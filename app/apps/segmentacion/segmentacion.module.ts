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
    this.cargarDepas()
  }

  cargarDepas(ccdd:string="1"){
    this.segmentacionservice.getDepartamentos(ccdd).subscribe(res=>{
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
