import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BannerComponent } from './banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/carousel';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from'@angular/common/http';
import { ArticleComponent } from './article/article.component'
import {GalleriaModule} from 'primeng/galleria'
import {RatingModule} from 'primeng/rating'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    BannerComponent,
    ProductComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    GalleriaModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
