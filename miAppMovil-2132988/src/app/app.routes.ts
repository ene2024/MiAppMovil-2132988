import { Routes } from '@angular/router';
import { TareasComponent } from './tareas/tareas.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { VistaDetalleComponent } from './vista-detalle/vista-detalle.component';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: '',
    component: TareasComponent,
  },
  {
    path: 'home',
    component: TareasComponent,
  },
  {
    path: 'tareas',
    component: TareasComponent,
  },
  {
    path: 'agregar-tarea',
    component: AgregarTareaComponent,
  },
  {
    path: 'vista-detalle',
    component: VistaDetalleComponent,
  },
];
