import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  nombre: string = "CARLA";
  ocupacion: string = "Estudiante";
  edad: number = 16;

  datos: any = {
    nombre: "Carla Monge",
    ocupacion: "Estudiante",
    edad: 16
  };
  informacion: any[]=[
  {
    titulo:"Origen",
    dato:"Lima-Perú",
    icono: "flag"
  },
  {
   titulo:"Email",
   dato:"carlita_2033@hotmail.com",
   icono:"mail"
 },
  {
  titulo:"Telefono",
  dato:"924769638",
  icono:"call"
  }
];
  Origen: string = "Lima-Perú";
  Email: string = "carlita_2033@hotmail.com";
  Telefono: number = 924769638;

  constructor(public navCtrl: NavController) {

  }

}
