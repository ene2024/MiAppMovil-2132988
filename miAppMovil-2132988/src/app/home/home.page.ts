import { Component} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class HomePage {
  constructor() { }

  titulo: string='Mi nueva página!';

}