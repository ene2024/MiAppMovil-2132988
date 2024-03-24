import { Component} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, CommonModule],
})
export class HomePage {
  constructor() {}

  titulo: string='Mi nueva página!';

  hazmeClick(): void{
    alert("Hiciste click!");
  }

  imgUrl: string = 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/03/Nueva-serie-de-television-de-Patricio-Estrella.jpg';
}