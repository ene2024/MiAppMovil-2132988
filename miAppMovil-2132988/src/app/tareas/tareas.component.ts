import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { VistaDetalleComponent } from '../vista-detalle/vista-detalle.component';
import { Tarea } from '../Tarea';
import { TareasService } from '../tareas.service';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, AgregarTareaComponent, VistaDetalleComponent, RouterModule, RouterLink],
})
export class TareasComponent {

  tareas: Tarea[] = [];

  constructor (private TareasService : TareasService) { }

  ngOnInit() {
    this.tareas = this.TareasService.obtenerTareas();
  }
  
  eliminarTarea(index: number) {
    console.log("Index a eliminar:", index);
    this.TareasService.eliminarTarea(index);
  }

}
