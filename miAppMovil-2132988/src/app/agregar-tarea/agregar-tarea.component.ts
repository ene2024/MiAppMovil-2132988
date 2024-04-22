import { Component, EventEmitter, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AgregarTareaComponent {

  nuevaTarea: Tarea = {nombre:'', mes:'', anio:0, descripcion:''};
  
  @Output() tareaAgregada = new EventEmitter<Tarea>();

  agregarTarea(){
    console.log('Nueva tarea:', this.nuevaTarea);
    
    //Emitir evento con la nueva tarea
    this.tareaAgregada.emit(this.nuevaTarea);
    //Limpiar formulario
    this.nuevaTarea = {nombre:'', mes:'', anio:0, descripcion:''};
  }
}
