import { Component} from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { TareasComponent } from './tareas/tareas.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { VistaDetalleComponent } from './vista-detalle/vista-detalle.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, CommonModule, TareasComponent, AgregarTareaComponent, VistaDetalleComponent, RouterModule],
})
export class AppComponent {
  constructor() {}
}