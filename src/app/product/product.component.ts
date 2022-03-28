import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticalsService } from '../articals.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  articles: Product[];
  constructor(private service: ArticalsService,private router: Router) {
    this.articles = []
   }
   responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }];

  ngOnInit(): void {
    this.service.getAllArticles().subscribe(res=>{
      this.articles = res;
      console.log(this.articles)
    })
  }
  navigateToArticle(articles: Product){
    this.router.navigate(['/article',articles.id] );
  }
  scrollImage(card: any, images: string[]){
    console.log(card)
    images.forEach(element => {
      setTimeout(() => {
        card.src = element
      }, 500);
    });
    
  }
}

export interface Product{
  id: string;
  name: string;
  category: string;
  vendor: Vendor[];
  rating: number;
  created: Date;
  stock: number;
  active: boolean;
  images: string[];
}

export interface Vendor{
  name: string;
  id: string;
  price: number;
  region : string;
  rating: number;
}