import { Component} from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

/* Proyecto */
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { TareasComponent } from './tareas/tareas.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
 
/* Práctica 9 
import { ProductosComponent } from './productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
*/

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, CommonModule,
    TareasComponent, AgregarTareaComponent],
})
export class AppComponent {
  constructor() {}
}