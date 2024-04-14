import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TareasComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  titulo: string='Mi App de Tareas';

}
