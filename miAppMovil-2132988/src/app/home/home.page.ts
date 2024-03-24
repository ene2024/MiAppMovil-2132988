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
  constructor() {
    console.log("AppComponent: Constructor");
  }
  ngOnChanges() {
    console.log("AppComponent: OnChanges");
  }
  ngOnInit() {
    console.log("AppComponent: OnInit");
  }
  ngDoCheck() {
    console.log("AppComponent: DoCheck");
  }
  ngAfterContentInit() {
    console.log("AppComponent: AfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("AppComponent: AfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("AppComponent: AfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("AppComponent: AfterViewChecked");
  }
  ngOnDestroy() {
    console.log("AppComponent: OnDestroy");
  }


  titulo: string='Mi nueva página!';

}