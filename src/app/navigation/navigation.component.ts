import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navbarOpen:boolean = false;
  constructor() { }
  toggleClass(){

    this.navbarOpen =! this.navbarOpen;
  }

  ngOnInit(): void {
  }

}
