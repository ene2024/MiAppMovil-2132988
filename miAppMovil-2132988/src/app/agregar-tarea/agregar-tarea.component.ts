import { Component, EventEmitter, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Tarea } from '../Tarea';
import { TareasService } from '../tareas.service';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, RouterLink],
})
export class AgregarTareaComponent {

  nuevaTarea: Tarea = {nombre:'', mes:'', anio:0, descripcion:''};

  constructor (private TareasService : TareasService) { }
  
  agregarTarea() {
    this.TareasService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = { nombre: '', descripcion: '', mes: '', anio: 0 };
  }

}
