import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Tarea } from '../Tarea';
import { TareasService } from '../tareas.service';

import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrls: ['./vista-detalle.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, RouterLink],
})
export class VistaDetalleComponent  implements OnInit {

  constructor (private TareasService : TareasService) { }

  tareas: Tarea[] = [];

  ngOnInit() {
    this.tareas = this.TareasService.obtenerTareas();
  }

}
