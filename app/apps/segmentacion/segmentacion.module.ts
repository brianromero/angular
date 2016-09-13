import {Component} from '@angular/core';
import { NgModule }           from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';


@Component({
    templateUrl: 'app/apps/segmentacion/segmentacion.html' 
})

class Segmentacion {

  comboInicial(){

  }

  filtroDepa(comboDepa){
    console.log(comboDepa);    
  }

  comboDepa(comboDepa) {
    //$('#comboPro').children().remove()
    //eval("$('#comboPro').append('<option value=0>TODOS</option>');")
    console.log(comboDepa);  
    this.combo()
    this.actualizarTabla()
  }

  comboProv(comboPro) {
    console.log(comboPro);  
    this.combo()
    this.actualizarTabla()
  }

  comboDis(comboDis) {
    console.log(comboDis);  
    this.combo()
    this.actualizarTabla()
  }

  comboArea(comboArea) {
    console.log(comboArea);  
    this.combo()
    this.actualizarTabla()
  }

  comboZona(comboZona) {
    console.log(comboZona);  
    this.combo()
    this.actualizarTabla()
  }
  
  actualizarTabla() {
    console.log("actualiza tabla")
    return "hola mundo";
  }

  combo(){
    console.log("actualiza filtro")
  }

}

const routes: Routes = [{ path: '', component: Segmentacion}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  declarations: [Segmentacion]
})

export default class SegmentacionModule { }
