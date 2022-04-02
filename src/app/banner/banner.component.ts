import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }
  bannerimages: any = [
    {image: "assets/images/1.jpg"},
    {image: "assets/images/2.jpg"},
    {image: "assets/images/3.jpg"},
    {image: "assets/images/4.jpg"}    
  ]
  ngOnInit(): void {
  }

}
