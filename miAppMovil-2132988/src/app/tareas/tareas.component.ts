import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';

import { Tarea } from '../tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, AgregarTareaComponent],
})
export class TareasComponent {
  
  titulo: string='Mi App de Tareas';

  tareas: Tarea[] = [];
  mostrarAgregarTarea: boolean = false;

  agregarNuevaTarea(tarea: Tarea){
    this.tareas.push(tarea);
    this.mostrarAgregarTarea = false;
  }

  toggleMostrarAgregarTarea() {
    this.mostrarAgregarTarea = !this.mostrarAgregarTarea;
  }

}
