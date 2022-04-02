import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';
  navbarOpen:boolean = false;
  constructor() { }
  toggleClass(){

    this.navbarOpen =! this.navbarOpen;
  }

}
