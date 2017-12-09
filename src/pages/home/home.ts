import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { Todo } from '../../shared/Todo';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  quehaceres: Todo[] = [
    {
      description: "lavar los platos",
      done: true
    },
    {
      description: "Tender mi cama",
      done: true
    },
    {
      description: "Pasear a mi perrito",
      done: true
    },
    {
      description: "Limpiar la mesa",
      done: false
    }

  ];
  quehacer: Todo = {
    description: "Lavar los platos",
    done: true
  };
  quehacer2: Todo = {
    description: "Tender mi cama",
    done: true
  };
  quehacer3: Todo = {
    description: "Pasear a mi perrito",
    done: true
  };
  quehacer4: Todo = {
    description: "Limpiar la mesa",
    done: false
  };

  botones: any[] = [

    {

      color: "secondary",
      grande: false,
      texto: "terminados"
    },

    {
      color: "danger",
      grande: false,
      texto: "pendientes"
    },

    {
      color: "dark",
      grande: true,
      texto: "todos"

    }
  ];

  constructor(
    public navCtrl: NavController,
    private todoService: TodoService) { }

  ngOnInit() {
    // codigo al iniciar el componente
    this.agregarQuehacer("estudiar", true);
    this.agregarQuehacer("comer", false);
    this.agregarQuehacer("leer", false);
  }

  agregarQuehacer(nuevoQuehacer: string, terminado: boolean) {
    if (nuevoQuehacer !== "") {
      this.quehaceres.push({

        description: nuevoQuehacer,
        done: terminado
      });
    }
  }

  filtrarQuehaceres(texto: string) {
    if (texto === "terminados"){
      this.botones[0].grande = true;
      this.botones[1].grande = false;
      this.botones[2].grande = false;
    } else if (texto === "pendientes"){
      this.botones[0].grande = false;
      this.botones[1].grande = true;
      this.botones[2].grande = false;
    }else {
      this.botones[0].grande= false;
      this.botones[1].grande= false;
      this.botones[2].grande= true;

    }

 }

}
