import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _http = inject(HttpClient);
  url: string = "http://localhost:3000/articles";
  
  getArticles(): Observable<Article[]> {
    return this._http.get<Article[]>(this.url);
  }

  getArticleById(id: number): Observable<Article> {
    return this._http.get<Article>(`${this.url}/${id}`);
  }

}
