import { Component, /*NgModule*/ } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

/*import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';*/

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
/*
@NgModule({
  declarations: [
    ListaAlumnosComponent],
  imports: [],
  providers: [],
  bootstrap: []
})export class AppModule { }*/

