import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonList, IonItem, IonItemSliding, IonItemOptions, IonItemOption, IonLabel, 
  IonButton, IonActionSheet
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  standalone: true,
  imports: [CommonModule, IonList, IonItem, IonItemSliding, IonItemOptions, IonItemOption, IonLabel, IonButton,
    IonActionSheet],
})
export class ListaAlumnosComponent {
  alumnos: any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Eliminar',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

}