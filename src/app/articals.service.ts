import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticalsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllArticles(): Observable<any>{
    const url = environment.backend_url + '/articles';
    return this.http.get(url);
  }
  
  getArticleById(id: any): Observable<any>{
    const url = environment.backend_url + '/article/'+id;
    return this.http.get(url);
  }
}
