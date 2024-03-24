import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, CommonModule],
})
export class HomePage implements OnInit{
  constructor() {}

  ngOnInit() {}

  verdadero: boolean = true;

  titulo: string='Mi nueva página!';

  hazmeClic(): void{
    alert("Hiciste clic!");
  }
}
