import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {

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
},
 {
   titulo:"Hobby",
   dato:"Escuchar música",
   icono:"alarm"
 }
];
  Origen: string = "Lima-Perú";
  Email: string = "carlita_2033@hotmail.com";
  Telefono: number = 924769638;

  constructor(public navCtrl: NavController) {

  }

ngOnInit() {
  this.agregarDato(
    "Mascota", "Perrito", "heart"
  );
  this.agregarDato(
    "Colegio", "José María Arguedas", "heart"
  );
  this.agregarDato(
    "Grupo favorito", "Arctic Monkeys", "heart"
  );
}
agregarDato(nuevoTitulo: string, nuevoDato: string, nuevoIcono: string) {
 this.informacion.push({
   titulo:nuevoTitulo,
   dato:nuevoDato,
   icono:nuevoIcono,
 });
}

}
