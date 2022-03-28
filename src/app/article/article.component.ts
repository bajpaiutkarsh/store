import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticalsService } from '../articals.service';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articleid : any;
  val: number =3;
  images: any[]=[
    {
        "previewImageSrc": "assets/images/d1.jpg",
        "thumbnailImageSrc": "assets/images/d1.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
    },
    {
        "previewImageSrc": "assets/images/d2.jpg",
        "thumbnailImageSrc": "assets/images/d2.jpg",
        "alt": "Description for Image 2",
        "title": "Title 2"
    },
    {
        "previewImageSrc": "assets/images/d3.jpg",
        "thumbnailImageSrc": "assets/images/d3.jpg",
        "alt": "Description for Image 3",
        "title": "Title 3"
    }];
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
      }
  ];
  article: any;
  constructor(private activatedRoute:ActivatedRoute,
    private _router:Router,private service: ArticalsService) { 
    }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => { 
      console.log(params);
       this.articleid = params.get('id');
       this.service.getArticleById(this.articleid).subscribe(res=>{
         this.article = res;
       })
    });
  }

}
