import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  standalone: true,
  imports: [CommonModule, IonList, IonItem],
})
export class ListaAlumnosComponent {
  constructor() {}

  alumnos: any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

}